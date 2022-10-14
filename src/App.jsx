import "./App.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

// function App() {

//   return (
//     <div>
//       <form onClick={e => e.preventDefault()} id="inline">

//         <img src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg" alt="..." />

//         <div id='column'>
//           <h1>Login to continue</h1>
//           <input className='input form-control' type="text" placeholder='Email' />
//           <input className='input form-control' type="password" placeholder='Password' />
//           <div id='forget'>
//             <div id='check'><input type="checkbox" /><label htmlFor="login">Remember me</label></div>

//             <a href="">Forget Password?</a>
//           </div>
//           <button className='btn btn-primary'>LOGIN</button>
//           <p>or sign up using</p>
//           <div id='logos'>
//             <BsFacebook id='logo'></BsFacebook>
//             <AiFillTwitterCircle id='logo1'></AiFillTwitterCircle></div>
//         </div>
//       </form>
//     </div>
//   )
// }

function Post(props) {
  return (
    <div className="main">
      <img src="" alt="..." />
      {props.profile}
      <label>{props.label}</label>
      <div>
        <p className="my-3">{props.text}</p>
        <img
          src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg"
          alt=""
          id="post1"
        />
      </div>
      <div>
        <button>like</button>
        <button>comment</button>
        <button>share</button>
      </div>
    </div>
  );
}
const Posts = () => (
  <div>
    <Post
      profile="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg"
      label="Aahad Ali"
      text="Lorem ipsum, dost, consequuntur possimus reprehenderit?."
      image="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/filmfare-1580695655.jpg"
    />
    <Post
      profile="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg"
      label="Aahad Ali"
      text="Lorem ipsum, dost, consequuntur possimus reprehenderit?."
      image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    />
    <Post
      profile="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg"
      label="Aahad Ali"
      text="Lorem ipsum, dost, consequuntur possimus reprehenderit?."
      image="https://images.squarespace-cdn.com/content/v1/5b398fb2f793925040070b55/1569358740365-XHKY3VFY8H86Q130T9MP/performers+on+stage?format=1000w"
    />
  </div>
);

// const Post = (props) => (
//   <div className="post">

//     <h1> {props.title} </h1>
//     <p> {props.text} </p>
//     <img src={props.image} alt="placeholder" />

//   </div>
// )

// const Page = () => (
//   <div>
//     I am a page component
//     <Post
//       title="Film fare update"
//       text="Lorem ipsum, dost, consequuntur possimus reprehenderit?."
//       image="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/filmfare-1580695655.jpg"
//     />
//     <Post
//       title="Winning the Best Music Director Award"
//       text="Lorem ipsum, dost, consequuntur possimus reprehenderit?."
//       image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
//     />
//     <Post
//       title="best drama Awards"
//       text="Lorem ipsum, dost, consequuntur possimus reprehenderit?."
//       image="https://images.squarespace-cdn.com/content/v1/5b398fb2f793925040070b55/1569358740365-XHKY3VFY8H86Q130T9MP/performers+on+stage?format=1000w"
//     />
//   </div>
// )

// export default App
export default Posts;
// export default Page
