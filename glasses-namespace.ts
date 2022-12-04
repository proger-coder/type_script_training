// вынесенный в отдельный файл неймспейс Очков
namespace Glasses {
    type lensBrand = 'Zeiss' | 'Nikon';
    type frameColor = 'red' | 'green' | 'black';

    export interface Frame {
        color: frameColor;
        bridge: number;
    }
    export interface Lenses {
        brand: lensBrand,
        left: number,
        right: number,
    }
    export type Glasses =  {
        frame: Frame;
        lenses: Lenses;
    }
}