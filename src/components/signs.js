import 'aframe'
import Prototypes from 'prop-types'


function Sign({x, y, z, l, m, n, id, textValue}) {
    return (
            <a-entity
                id={`sign-${id}`}
                geometry="primitive: plane; width: 2.8ds; height: 4.8;"
                material="color: black"
                text={`wrapCount: 15; align: center; value: ${textValue}`}
                position={`${x} ${y} ${z}`}
                rotation={`${l} ${m} ${n}`}
                scale="1 1 1"
            >
            </a-entity>
    );
}

Sign.Prototypes = {
    x: Prototypes.number,
    y: Prototypes.number,
    z: Prototypes.number,
    l: Prototypes.number,
    m: Prototypes.number,
    n: Prototypes.number,
    textValue: Prototypes.string,
    id: Prototypes.number
}

export default Sign;