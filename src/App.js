//import { motion } from "framer-motion";
import Images from "./Images";
import ReactSlick from "./ReactSlick";

function App() {
  console.log(Images);
  return (
    <ReactSlick></ReactSlick>
    // <div>
    //   <motion.div className="carousel">
    //     <motion.div drag="x" className="inner-carousel">
    //       {Images.map((Image) => {
    //         return (
    //           <motion.div className="item">
    //             <img src={Image} alt="" />
    //           </motion.div>
    //         );
    //       })}
    //     </motion.div>
    //   </motion.div>
    // </div>
  );
}

export default App;
