import style from './style.module.css';

export default function Dado(props){
    let numUrl;

    switch(props.valor){
        case 1:
            numUrl = "https://w7.pngwing.com/pngs/425/86/png-transparent-dice-game-kismet-four-sided-die-dice-1-angle-face-rectangle-thumbnail.png";
            break
        case 2:
            numUrl = "https://w7.pngwing.com/pngs/770/755/png-transparent-dice-bunco-dice-rectangle-dice-material-thumbnail.png";
            break
        case 3:
            numUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhQHc-jkyPtGukm5jOD32pDX08ylE6Od3DsgaiTJnKygBPDOUuapwrffh3aH68Kk_p3I&usqp=CAU";
            break
        case 4:
            numUrl = "https://w7.pngwing.com/pngs/561/1017/png-transparent-dice-four-sided-die-game-dice-faces-angle-rectangle-wikimedia-commons-thumbnail.png";
            break
        case 5:
            numUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jwwZBMs4ble4d-M1-NZ4RgwAmgxoIeiWp62Btl3HaQT9BScxohSnZNRixJCSVZtxUdE&usqp=CAU";
            break
        case 6:
            numUrl = "https://d29fhpw069ctt2.cloudfront.net/clipart/88182/preview/dado_6_preview_e156.png";
            break
    }

    return <>
    <img src={ numUrl } className={style.dado}></img>
    </>
}

 