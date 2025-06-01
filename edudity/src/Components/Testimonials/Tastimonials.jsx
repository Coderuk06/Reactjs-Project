import react, { useRef }  from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function Tastimonials() {

  const slider = useRef()
  let tx = 0;

const SliderForword = () =>{
  if(tx > -50){
    tx -= 50;
  }
  slider.current.style.transform = `translateX(${tx}%)`
  
}

const SliderBackword = () =>{
    if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
 
}


  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={SliderForword}/>
      <img src={back_icon} alt="" className="back_btn"  onClick={SliderBackword} />
      <div className="selider">
        <ul ref={slider}>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William jacksonc 1 </h3>
                  <span>Edusiy, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates placeat necessitatibus suscipit, ipsum nihil quis molestias neque quas eum laborum magni dignissimos deleniti rerum! </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William jackson 2</h3>
                  <span>Edusiy, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad accusantium in nulla, mollitia dolores. Veritatis dolores nesciunt, quae corporis in distinctio dicta aspernatur? Officiis.</p>
            </div>
          </li>

          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William jackson 3</h3>
                  <span>Edusiy, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure voluptatum aliquid amet. Dolorum suscipit esse ipsa cupiditate quae rerum ducimus est voluptates. Hic voluptatem harum, itaque quod corporis aliquid.</p>
            </div>
          </li>

          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William jackson 4</h3>
                  <span>Edusiy, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure voluptatum aliquid amet. Dolorum suscipit esse ipsa cupiditate quae rerum ducimus est voluptates. Hic voluptatem harum, itaque quod corporis aliquid.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tastimonials;
