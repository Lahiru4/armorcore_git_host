import './App.css';
import {NavBar} from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "./components/Banner";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {CustomerServiceOutlined} from '@ant-design/icons';
import {FloatButton} from 'antd';
import {HashLink} from 'react-router-hash-link';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
            <HashLink to="#contact" smooth>
                <FloatButton
                    shape="square"
                    style={{
                        insetInlineEnd: 70,
                        insetBlockEnd: 70,
                        backgroundColor: '#0f8548',
                    }}
                    icon={<CustomerServiceOutlined/>}
                />
            </HashLink>
        </div>
    );
}

export default App;
