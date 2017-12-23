export interface ICenterOn {
    x: number
    y: number
    scale: number
    duration: number
}

export class Props {
    /**
     * 操作区域宽度
     */
    public cropWidth: number = 100

    /**
     * 操作区域高度
     */
    public cropHeight: number = 100

    /**
     * 图片宽度
     */
    public imageWidth: number = 100

    /**
     * 图片高度
     */
    public imageHeight: number = 100

    /**
     * 单手是否能移动图片
     */
    public panToMove?: boolean = true

    /**
     * 多手指是否能缩放
     */
    public pinchToZoom?: boolean = true

    /**
     * 手指按住少于多少毫秒认为是退出
     */
    public leaveStayTime?: number = 100

    /**
     * 手指按住后位移少于多少认为是退出
     */
    public leaveDistance?: number = 10

    /**
     * 最大滑动阈值
     */
    public maxOverflow?: number = 100

    /**
     * 长按的阈值（毫秒）
     */
    public longPressTime?: number = 800

    /**
     * 双击时的间隔
     */
    public doubleClickInterval?: number = 175

    /**
     * If provided this will cause the view to zoom and pan to the center point
     * Duration is optional and defaults to 300 ms.
     */
    public centerOn?: ICenterOn

    /**
     * 透传
     */
    public others?: any = null

    /**
     * 单击的回调
     */
    public onClick?: () => void = () => {
        //
    }

    /**
     * 双击的回调
     */
    public onDoubleClick?: () => void = () => {
        //
    }

    /**
     * 横向超出的距离，父级做图片切换时，可以监听这个函数
     * 当此函数触发时，可以做切换操作
     */
    public horizontalOuterRangeOffset?: (offsetX?: number) => void = () => {
        //
    }

    /**
     * 触发想切换到左边的图，向左滑动速度超出阈值时触发
     */
    public onDragLeft?: () => void = () => {
        //
    }

    /**
     * 松手但是没有取消看图的回调
     */
    public responderRelease?: (vx?: number, scale?: number) => void = () => {
        //
    }

    /**
     * 长按的回调
     */
    public onLongPress?: () => void = () => {
        //
    }

    /**
     * If provided, this will be called everytime the map is moved
     */
    public onMove?: (position?: object) => void = () => {
        //
    }

    /**
     * If provided, this method will be called when the onLayout event fires
     */
    public layoutChange?: (event?: object) => void = () => {
        //
    }
}

export class State {
    /**
     * 中心 x 坐标
     */
    public centerX?: number = 0.5
    /**
     * 中心 y 坐标
     */
    public centerY?: number = 0.5
}