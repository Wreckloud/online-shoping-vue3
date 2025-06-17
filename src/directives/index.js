import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoadPlug = {
  install(app) {
    // 自定义指令
    app.directive('lazyLoad', {
      mounted(el, binding) {
        // 使用 vueUse 的 useIntersectionObserver 检测元素是否位于视窗'
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
