import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// JS파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다. 

function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App; //다른 JS파일에서 불러올 수 있도록 내보내주기