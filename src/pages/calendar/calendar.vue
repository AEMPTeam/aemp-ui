<template>
  <view>
    <view style="height: 640rpx; width: 90%; overflow:hidden; margin: 0 auto 40px;">
      <aemp-calendar
        ref="calendar"
        :calendarConfig="calendarConfig"
        @onSwipe="onSwipe"
        @onTapDay="onTapDay"
        @afterTapDay="afterTapDay"
        @whenChangeWeek="whenChangeWeek"
        @whenChangeMonth="whenChangeMonth"
        @afterRender="afterRender"
      ></aemp-calendar>
    </view>

    <view class='b cc wrap btn-wrap'>
      <button
        class='b cc btn'
        :class="'btn-' + item.color + ' ' + 'btn-action-' + item.action"
        v-for="(item, index) in actionBtn"
        :key="index"
        :data-action="item.action"
        :data-disable="item.disable"
        @tap="handleAction">{{item.text}}</button>
    </view>

    <view class="show-rst-wrap">
      <view v-for="item in rst" class="show-rst">{{item}}</view>
      <view v-if="rstStr" class="show-rst">{{rstStr}}</view>
    </view>
  </view>
</template>

<script>
import aempCalendar from "../../components/aemp-calendar/aemp-calendar";

export default {
  config: {
    navigationBarTitleText: "日历 Calendar"
  },
  data() {
    return {
      calendarConfig: {
        multi: true, // 是否开启多选,
        // theme: 'elegant', // 日历主题，目前共两款可选择，默认 default 及 elegant，自定义主题在 theme 文件夹扩展
        showLunar: true, // 是否显示农历，此配置会导致 setTodoLabels 中 showLabelAlways 配置失效
        // inverse: true, // 单选模式下是否支持取消选中,
        // chooseAreaMode: true, // 开启日期范围选择模式，该模式下只可选择时间段
        markToday: '今', // 当天日期展示不使用默认数字，用特殊文字标记
        // defaultDay: '2018-3-6', // 默认选中指定某天；当为 boolean 值 true 时则默认选中当天，非真值则在初始化时不自动选中日期，
        // highlightToday: true, // 是否高亮显示当天，区别于选中样式（初始化时当天高亮并不代表已选中当天）
        // takeoverTap: true, // 是否完全接管日期点击事件（日期不会选中），配合 onTapDay() 使用
        // preventSwipe: true, // 是否禁用日历滑动切换月份
        // firstDayOfWeek: 'Mon', // 每周第一天为周一还是周日，默认按周日开始
        // onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
        // hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
        // showHandlerOnWeekMode: true, // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
        // disableMode: {  // 禁用某一天之前/之后的所有日期
        //   type: 'after',  // [‘before’, 'after']
        //   date: '2020-03-24', // 无该属性或该属性值为假，则默认为当天
        // }
      },
      actionBtn: [
        {
          text: '跳转指定日期',
          action: 'jump',
          color: 'olive'
        },
        {
          text: '获取当前已选',
          action: 'getSelectedDay',
          color: 'red'
        },
        {
          text: '取消选中日期',
          action: 'cancelSelectedDates',
          color: 'mauve'
        },
        {
          text: '设置待办事项',
          action: 'setTodoLabels',
          color: 'cyan'
        },
        {
          text: '删除指定代办',
          action: 'deleteTodoLabels',
          color: 'pink'
        },
        {
          text: '清空待办事项',
          action: 'clearTodoLabels',
          color: 'red'
        },
        {
          text: '获取所有代办',
          action: 'getTodoLabels',
          color: 'purple'
        },
        {
          text: '禁选指定日期',
          action: 'disableDay',
          color: 'olive'
        },
        {
          text: '指定可选区域',
          action: 'enableArea',
          color: 'pink'
        },
        {
          text: '指定特定可选',
          action: 'enableDays',
          color: 'red'
        },
        {
          text: '选中指定日期',
          action: 'setSelectedDays',
          color: 'cyan'
        },
        {
          text: '周月视图切换',
          action: 'switchView',
          color: 'orange'
        },
        {
          text: '自定义配置',
          action: 'config',
          color: 'pink'
        },
        {
          text: '获取自定义配置',
          action: 'getConfig',
          color: 'olive'
        },
        {
          text: '获取日历面板日期',
          action: 'getCalendarDates',
          color: 'purple'
        }
      ],
      rst: [],
      rstStr: '',
      week: false
    }
  },
  components: {
    aempCalendar
  },
  methods: {
    showToast(msg) {
      if (!msg || typeof msg !== 'string') return;
      this.$api.showToast({
        title: msg
      })
    },
    afterTapDay(e) {
      console.log('afterTapDay', e);
    },
    whenChangeMonth(e) {
      console.log('whenChangeMonth', e);
    },
    whenChangeWeek(e) {
      console.log('whenChangeWeek', e);
    },
    onTapDay(e) {
      console.log('onTapDay', e);
    },
    afterRender(e) {
      console.log('afterRender', e);
      // this.$refs.calendar.switchView('week').then(() => {
      //   this.$refs.calendar.jump(2020, 3, 1).then(date => {}); // 跳转至某日
      // });
    },
    onSwipe(e) {
      console.log('onSwipe', e);
    },
    generateRandomDate(type) {
      let random = ~~(Math.random() * 10);
      switch (type) {
        case 'year':
          random = 201 * 10 + ~~(Math.random() * 10);
          break;
        case 'month':
          random = (~~(Math.random() * 10) % 9) + 1;
          break;
        case 'date':
          random = (~~(Math.random() * 100) % 27) + 1;
          break;
        default:
          break;
      }
      return random;
    },
    handleAction(e) {
      const { action, disable } = e.currentTarget.dataset;
      if (disable) {
        this.showToast('抱歉，还不支持～😂')
      }
      this.rst = [];
      const calendar = this.$refs.calendar;
      const { year, month } = calendar.getCurrentYM();
      switch (action) {
        case 'config':
          calendar
            .setCalendarConfig({
              showLunar: false,
              theme: 'elegant',
              multi: true
            })
            .then(conf => {
              console.log('设置成功：', conf);
            });
          break;
        case 'getConfig':
          const config = calendar.getCalendarConfig();
          this.showToast('请在控制台查看结果')
          console.log('自定义配置: ', config);
          break;
        case 'jump': {
          const year = this.generateRandomDate('year');
          const month = this.generateRandomDate('month');
          const date = this.generateRandomDate('date');
          calendar[action](year, month, date);
          break;
        }
        case 'getSelectedDay': {
          const selected = calendar[action]();
          if (!selected || !selected.length)
            return this.showToast('当前未选择任何日期');
          this.showToast('请在控制台查看结果')
          console.log('get selected days: ', selected);
          this.rst = selected.map(item => JSON.stringify(item));
          break;
        }
        case 'cancelSelectedDates':
          calendar[action]([
            {
              year: 2020,
              month: 3,
              day: 3
            }
          ]);
          console.log('cancel selected day: ', '2020-3-3');
          break;
        case 'setTodoLabels': {
          const days = [
            {
              year,
              month,
              day: this.generateRandomDate('date'),
              todoText: Math.random() * 10 > 5 ? '领奖日' : ''
            }
          ];
          calendar[action]({
            showLabelAlways: true,
            days
          });
          console.log('set todo labels: ', days);
          break;
        }
        case 'deleteTodoLabels': {
          const todos = [...calendar.getTodoLabels()];
          if (todos && todos.length) {
            todos.length = 1;
            calendar[action](todos);
            const _todos = [...calendar.getTodoLabels()];
            setTimeout(() => {
              this.rst = _todos.map(item => JSON.stringify(item));
              console.log('delete todo labels: ', todos);
            });
          } else {
            this.showToast('没有待办事项');
          }
          break;
        }
        case 'clearTodoLabels':
          const todos = [...calendar.getTodoLabels()];
          if (!todos || !todos.length) {
            return this.showToast('没有待办事项');
          }
          calendar[action]();
          break;
        case 'getTodoLabels': {
          const selected = calendar[action]();
          if (!selected || !selected.length)
            return this.showToast('未设置待办事项')
          const rst = selected.map(item => JSON.stringify(item));
          rst.map(item => JSON.stringify(item));
          this.rst = rst;
          break;
        }
        case 'disableDay':
          const day = this.generateRandomDate('date')
          calendar[action]([
            {
              year,
              month,
              day
            }
          ]);
          console.log('disable day: ', `${year}-${month}-${day}`);
          break;
        case 'enableArea': {
          let sDate = this.generateRandomDate('date');
          let eDate = this.generateRandomDate('date');
          if (sDate > eDate) {
            [eDate, sDate] = [sDate, eDate];
          }
          const area = [`${year}-${month}-${sDate}`, `${year}-${month}-${eDate}`];
          calendar[action](area);
          this.rstStr = JSON.stringify(area);
          console.log('enable area: ', `${year}-${month}-${sDate} 至 ${year}-${month}-${eDate}`)
          break;
        }
        case 'enableDays':
          const days = [
            `${year}-${month}-${this.generateRandomDate('date')}`,
            `${year}-${month}-${this.generateRandomDate('date')}`,
            `${year}-${month}-${this.generateRandomDate('date')}`,
            `${year}-${month}-${this.generateRandomDate('date')}`,
            `${year}-${month}-${this.generateRandomDate('date')}`
          ];
          calendar[action](days);
          this.rstStr = JSON.stringify(days);
          console.log('enable days: ', days)
          break;
        case 'switchView':
          if (!this.week) {
            calendar[action]('week');
            this.week = true;
          } else {
            calendar[action]();
            this.week = false;
          }
          break;
        case 'setSelectedDays':
          const toSet = [
            {
              year,
              month,
              day: this.generateRandomDate('date')
            },
            {
              year,
              month,
              day: this.generateRandomDate('date')
            }
          ];
          calendar[action](toSet);
          break;
        case 'getCalendarDates':
          this.showToast('请在控制台查看结果')
          console.log(calendar.getCalendarDates());
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
  .b {
    display: flex;
  }

  .lr {
    flex-direction: row;
  }

  .tb {
    flex-direction: column;
  }

  .ps {
    justify-content: flex-start;
  }

  .pb {
    justify-content: space-between;
  }

  .pc {
    justify-content: center;
  }

  .ac {
    align-items: center;
  }

  .cc {
    align-items: center;
    justify-content: center;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .flex {
    flex-grow: 1;
  }

  .btn-wrap {
    width: 90%;
    margin: 0 auto;
  }

  .btn {
    box-sizing: border-box;
    padding: 0 30px;
    font-size: 28px;
    height: 60px;
    line-height: 1;
    background: transparent;
    margin-bottom: 20px;
  }

  .btn:active {
    filter: grayscale(100%);
  }

  .btn-red {
    color: #e54d42;
  }

  .btn-red::after {
    border-color: #e54d42;
    border-radius: 60px;
  }

  .btn-olive {
    color: #8dc63f;
  }

  .btn-olive::after {
    border-color: #8dc63f;
    border-radius: 60px;
  }

  .btn-orange {
    color: #f37b1d;
  }

  .btn-orange::after {
    border-color: #f37b1d;
    border-radius: 60px;
  }

  .btn-cyan {
    color: #1cbbb4;
  }

  .btn-cyan::after {
    border-color: #1cbbb4;
    border-radius: 60px;
  }

  .btn-mauve {
    color: #9c26b0;
  }

  .btn-mauve::after {
    border-color: #9c26b0;
    border-radius: 60px;
  }

  .btn-pink {
    color: #e03997;
  }

  .btn-pink::after {
    border-color: #e03997;
    border-radius: 60px;
  }

  .btn-purple {
    color: #6739b6;
  }

  .btn-purple::after {
    border-color: #6739b6;
    border-radius: 60px;
  }

  .btn-brown {
    color: #a5673f;
  }

  .btn-brown::after {
    border-color: #a5673f;
    border-radius: 60px;
  }

  .btn-grey {
    color: #8799a3;
  }

  .btn-grey::after {
    border-color: #8799a3;
    border-radius: 60px;
  }

  .show-rst-wrap {
    padding: 20px 30px 50px;
  }

  .show-rst {
    font-size: 26px;
    color: #a3a3a3;
    line-height: 26px;
    margin-bottom: 15px;
    word-wrap: break-word;
  }

  /deep/ .blue-date {
    color: blue;
  }

  /deep/ .orange-date {
    color: #f40;
  }
</style>
