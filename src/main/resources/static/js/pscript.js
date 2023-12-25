import * as reactSpringweb from 'https://esm.run/@react-spring/web';
    console.log(reactSpringweb)
    const springs = reactSpringweb.useSpring({
      from: { x: 0 },
      to: { x: 100 },
    })
    export default function MyComponent() {
      return (
        <animated.div
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      )
    }
    
    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("myElement").appendChild(anim);
    })