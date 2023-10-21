/* 모듈 정의 d.ts 파일
DefineComponent 호출하여 *.vue 파일이 DefineComponent 반복하지 않게 함 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
