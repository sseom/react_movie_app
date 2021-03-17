import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import './App.css';

function App() {
  return (
    <HashRouter>
      {/* 모든걸 HashRouter 안에 넣을 필요는 없지만  
      link는 route안에 있어야함 */}
      <Navigation /> 
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>

    /* 
      BrowserRouter VS HashRouter
      별차이 없음 단 /#/ 해시태그의 차이가 있고 gh-pages에 설정하기 복잡함
      gh-pages에 업로드할예정이니 HashRouter을 사용

      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    */
  );
}

export default App;
