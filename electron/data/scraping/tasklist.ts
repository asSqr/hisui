//atcoder.jp/contests/------/tasksをスクレイピングする
const { JSDOM } = require("jsdom");
export interface taskList {
  taskHeader: string;
  taskName: string;
  taskUrl: string;
  taskLimit: string;
  taskMemory: string;
}
/**
 * @module scraping_contest_list
 * @param {string} body - atcoder.jp/contest/tasks/---/のソースを渡す
 * @return {taskList} - jsonにして返す
 */
export async function scrapingTaskList(body: any) {
  const dom = new JSDOM(body);

  const tasklistBefore = dom.window.document.querySelector("tbody");
  const taskall = tasklistBefore.querySelectorAll("tr");
  const tasklistAfter = [].map.call(taskall, (element: any) => {
    const taskUrl = element.querySelector("a").getAttribute("href");
    const taskName = element.querySelectorAll("a")[1].textContent.trim();
    const tmp_td = element.querySelectorAll("td");
    const taskLimit = tmp_td[2].textContent.trim();
    const taskMemory = tmp_td[3].textContent.trim();
    const taskHeader = element.querySelector("a").textContent.trim();
    const returnData: taskList = {
      taskHeader,
      taskName,
      taskUrl,
      taskLimit,
      taskMemory,
    };
    return returnData;
  });
  return tasklistAfter;
}
