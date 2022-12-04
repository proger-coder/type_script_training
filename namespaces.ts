// namespaces: ранее - "внутренние модули"
// ниже - строка импорта:
/// <reference path="glasses-namespace.ts"/>
namespace Glasses {
    function orderGlasses(frame: Frame, lenses: Lenses): Glasses{
        return {frame, lenses};
    }
    const gl = orderGlasses({color:'red', bridge:5519}, {brand:'Zeiss', left:-2, right:-2})
    console.log(gl)
}


// а это уже без экспортов-импортов - всё рядом
namespace Faka {
    export type Fucker = 'fucker';
    export type Mazza = {
        name: string
    }
}

namespace Faka {
    const f:Fucker = 'fucker';
    const m:Mazza = {name: 'blackMazza'};
    console.log(f,m);
}