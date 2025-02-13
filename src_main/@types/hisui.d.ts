// HisuiEventのType
// Copyright © 2021-2022 adenohitu. All rights reserved.
/// <reference types="node" />
import { EventEmitter } from "events";
import { submitStatus } from "../data/scraping/submit-data";
import { standingData } from "../data/standing";

export declare class hisuiEventtType extends EventEmitter {
  // --認証処理に関するイベント--

  /**
   * ログインが成功した時に呼び出される
   */
  on(event: "login", listener: () => void): this;
  emit(event: "login"): boolean;

  /**
   * ログアウトが実行された時に呼び出される
   */
  on(event: "logout", listener: () => void): this;
  emit(event: "logout"): boolean;

  // --コンテストに関するイベント--

  /**
   * デフォルトのコンテストが開始時刻になると一回呼び出される
   */
  on(event: "contest-start", listener: () => void): this;
  emit(event: "contest-start"): boolean;

  /**
   * デフォルトのコンテストが終了時刻になると一回呼び出される
   */
  on(event: "contest-end", listener: () => void): this;
  emit(event: "contest-end"): boolean;

  /**
   * デフォルトのコンテストが変更されると実行
   * 変更後のコンテストIDを返す
   */
  on(event: "DefaultContestID-change", listener: (args: string) => void): this;
  emit(event: "DefaultContestID-change", args: string): boolean;

  /**
   * 順位表データが更新された時に発生するイベント
   */
  once(
    event: "standingsData-update",
    listener: (args: standingData) => void
  ): this;
  on(
    event: "standingsData-update",
    listener: (args: standingData) => void
  ): this;
  emit(event: "standingsData-update", args: standingData): boolean;

  // --MainWindowに関するイベント--

  /**
   * MainWindowのViewの一番上のものが変更された時に実行される
   */
  on(event: "view-main-top", listener: (viewName: string) => void): this;
  emit(event: "view-main-top", args: string): boolean;

  // 提出に関するイベント

  /**
   * 提出が起こった時に発生
   * SubmitのPostRequestが完了したときに呼び出し
   */
  on(event: "submit", listener: (taskScreenName: string) => void): this;
  emit(event: "submit", taskScreenName: string): boolean;
  /**
   * 提出後直後SubmitIDを特定した直後実行
   */
  on(
    event: "submit-status-start",
    listener: (status: submitStatus) => void
  ): this;
  emit(event: "submit-status-start", status: submitStatus): boolean;
  /**
   * 提出後、ジャッジの状態を監視し、状態を取得するたびこのイベントを発行
   */
  on(event: "submit-status", listener: (status: submitStatus) => void): this;
  emit(event: "submit-status", status: submitStatus): boolean;
  /**
   * Intervalがなくなり、ジャッジ情報が確定したときに実行される
   */
  on(
    event: "submit-status-finish",
    listener: (status: submitStatus) => void
  ): this;
  emit(event: "submit-status-finish", status: submitStatus): boolean;

  /**
   * Taskcontが作成されたときに
   */
  on(
    event: "create-taskcont",
    listener: (taskScreenName: string) => void
  ): this;
  emit(event: "create-taskcont", taskScreenName: string): boolean;

  // Pluginに関するEvent

  /**
   * MainWindowが開かれViewを追加する準備ができた時
   */
  on(event: "setup-addView", listener: () => void): this;
  emit(event: "setup-addView"): boolean;
}
