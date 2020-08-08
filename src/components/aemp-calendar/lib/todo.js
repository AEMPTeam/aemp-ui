import { Logger, uniqueArrayByDate, GetDate, deepClone } from './utils';

const logger = new Logger();
const getDate = new GetDate();

class Todo {
  constructor (vm) {
    this.vm = vm;
  }

  /**
   * 设置待办事项标志
   * @param {object} options 待办事项配置
   */
  setTodoLabels (options) {
    if (options) this.vm.calendar.todoConfig = options;
    if (!this.vm.calendar || !this.vm.calendar.days) {
      return logger.warn('请等待日历初始化完成后再调用该方法');
    }
    const dates = [...this.vm.calendar.days];
    const { curYear, curMonth } = this.vm.calendar;
    const {
      circle,
      dotColor = '',
      pos = 'bottom',
      showLabelAlways,
      days: todoDays = []
    } = options || this.vm.calendar.todoConfig || {};
    const { todoLabels = [], todoLabelPos, todoLabelColor } = this.vm.calendar;
    const currentMonthTodoLabels = this.getTodoLabels({
      year: curYear,
      month: curMonth
    });
    let newTodoLabels = todoDays.filter(
      item => +item.year === +curYear && +item.month === +curMonth
    );
    if (this.vm.calendar.weekMode) {
      newTodoLabels = todoDays;
    }
    const allTodos = currentMonthTodoLabels.concat(newTodoLabels);
    for (let todo of allTodos) {
      let target;
      if (this.vm.calendar.weekMode) {
        target = dates.find(
          date =>
            +todo.year === +date.year &&
            +todo.month === +date.month &&
            +todo.day === +date.day
        );
      } else {
        target = dates[todo.day - 1];
      }
      if (!target) continue;
      if (showLabelAlways) {
        target.showTodoLabel = true;
      } else {
        target.showTodoLabel = !target.choosed;
      }
      if (target.showTodoLabel && todo.todoText) {
        target.todoText = todo.todoText;
      }
      if (todo.color) target.color = todo.color;
    }

    this.vm.calendar.days = dates;
    this.vm.calendar.todoLabels = uniqueArrayByDate(todoDays.concat(todoLabels));

    if (!circle) {
      if (pos && pos !== todoLabelPos) this.vm.calendar.todoLabelPos = pos;
      if (dotColor && dotColor !== todoLabelColor) {
        this.vm.calendar.todoLabelColor = dotColor;
      }
    }
    this.vm.calendar.todoLabelCircle = circle || false;
    this.vm.calendar.showLabelAlways = showLabelAlways || false;
  }

  /**
   *  删除指定日期的待办事项
   * @param {array} todos 需要删除待办事项的日期
   */
  deleteTodoLabels (todos) {
    if (!(todos instanceof Array) || !todos.length) return;
    const todoLabels = this.filterTodos(todos);
    const { days: dates, curYear, curMonth } = deepClone(this.vm.calendar);
    const currentMonthTodoLabels = todoLabels.filter(
      item => curYear === +item.year && curMonth === +item.month
    );
    dates.forEach(item => {
      item.showTodoLabel = false;
    });
    currentMonthTodoLabels.forEach(item => {
      dates[item.day - 1].showTodoLabel = !dates[item.day - 1].choosed;
    });
    this.vm.calendar.days = dates
    this.vm.calendar.todoLabels = todoLabels
  }

  /**
   * 清空所有待办事项
   */
  clearTodoLabels () {
    const { days = [] } = deepClone(this.vm.calendar);
    days.forEach(item => {
      item.showTodoLabel = false;
    });
    this.vm.calendar.days = days
    this.vm.calendar.todoLabels = []
  }

  /**
   * 获取所有待办事项
   * @param {object} target 指定年月
   * @param {number} [target.year] 年
   * @param {number} [target.month] 月
   */
  getTodoLabels (target) {
    const { todoLabels = [] } = this.vm.calendar;
    if (target) {
      const { year, month } = target;
      return todoLabels.filter(
        item => +item.year === +year && +item.month === +month
      );
    }
    return todoLabels;
  }

  /**
   * 过滤将删除的待办事项
   * @param {array} todos 需要删除待办事项
   */
  filterTodos (todos) {
    const { todoLabels = [] } = this.vm.calendar;
    const deleteTodo = todos.map(item => getDate.toTimeStr(item));
    return todoLabels.filter(
      item => !deleteTodo.includes(getDate.toTimeStr(item))
    );
  }

  /**
   * 单选时显示待办事项
   * @param {array} todoDays
   * @param {array} days
   * @param {array} selectedDays
   */
  showTodoLabels (todoDays, days, selectedDays) {
    todoDays.forEach(item => {
      if (this.vm.calendar.weekMode) {
        days.forEach((_item, idx) => {
          if (+_item.day === +item.day) {
            const day = days[idx];
            day.hasTodo = true;
            day.todoText = item.todoText;
            if (
              selectedDays &&
              selectedDays.length &&
              +selectedDays[0].day === +item.day
            ) {
              day.showTodoLabel = true;
            }
          }
        });
      } else {
        const day = days[item.day - 1];
        if (!day) return;
        day.hasTodo = true;
        day.todoText = item.todoText;
        if (
          selectedDays &&
          selectedDays.length &&
          +selectedDays[0].day === +item.day
        ) {
          days[selectedDays[0].day - 1].showTodoLabel = true;
        }
      }
    });
  }
}

export default vm => new Todo(vm);
