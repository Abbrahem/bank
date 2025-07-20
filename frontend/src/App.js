import React from 'react';
import './App.css';
import logo from './logo.svg'; // مؤقتًا حتى يتم استبداله
import Login from './Login';
import Booking from './Booking';
import Admin from './Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'animate.css';

function MainPage() {
  return (
    <div className="App" style={{ fontFamily: 'Cairo, sans-serif' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" href="#">
            <img src={logo} alt="بنك الاشتراكات" width="40" height="40" style={{borderRadius: '50%'}} />
            بنك الاشتراكات
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">عن البنك</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">آراء عملاءنا</a>
              </li>
            </ul>
            <a href="/login" className="btn btn-dark ms-lg-3 px-4 rounded-pill">تسجيل الدخول</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center position-relative" style={{height: '100vh', background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80) center/cover no-repeat'}}>
        <div className="container text-center text-dark position-relative" style={{zIndex:2}}>
          <h1 className="display-4 fw-bold mb-3" style={{textShadow: '0 2px 8px #fff'}}>مرحبا بك في بنك الاشتراكات</h1>
          <p className="lead mb-4" style={{textShadow: '0 1px 6px #fff'}}>نحن هنا لنقدم لك أفضل الخدمات البنكية بأعلى جودة واحترافية. احجز موعدك بسهولة وابدأ تجربتك المصرفية الفاخرة معنا.</p>
          <a href="/book" className="btn btn-outline-dark btn-lg px-5 py-2 rounded-pill shadow">احجز موعدك الآن</a>
        </div>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(255,255,255,0.5)', zIndex:1}}></div>
      </section>
      {/* عن البنك */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">عن البنك</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card shadow-lg border-0 h-100 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="card-body text-center py-5">
                  <div className="mb-3">
                    <span className="bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-block">
                      <i className="bi bi-award fs-2 text-secondary"></i>
                    </span>
                  </div>
                  <h5 className="card-title fw-bold mb-2">خبرة مصرفية عريقة</h5>
                  <p className="card-text">نمتلك سنوات من الخبرة في تقديم الخدمات البنكية المتميزة لعملائنا في جميع أنحاء الجمهورية.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg border-0 h-100 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="card-body text-center py-5">
                  <div className="mb-3">
                    <span className="bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-block">
                      <i className="bi bi-gear-wide-connected fs-2 text-secondary"></i>
                    </span>
                  </div>
                  <h5 className="card-title fw-bold mb-2">خدمات متكاملة</h5>
                  <p className="card-text">نوفر مجموعة واسعة من الخدمات البنكية لتلبية جميع احتياجات الأفراد والشركات.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg border-0 h-100 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="card-body text-center py-5">
                  <div className="mb-3">
                    <span className="bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-block">
                      <i className="bi bi-shield-lock fs-2 text-secondary"></i>
                    </span>
                  </div>
                  <h5 className="card-title fw-bold mb-2">أمان وخصوصية</h5>
                  <p className="card-text">نلتزم بأعلى معايير الأمان والخصوصية لحماية بيانات وأموال عملائنا.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* آراء عملاءنا */}
      <section id="clients" className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">آراء عملاءنا</h2>
          <div className="row g-4 justify-content-center">
            {[
              {name: 'أحمد علي', text: 'خدمة ممتازة وسرعة في إنجاز المعاملات.'},
              {name: 'سارة محمد', text: 'تعامل راقي وموظفين محترفين.'},
              {name: 'محمود حسن', text: 'أفضل بنك تعاملت معه من حيث الأمان.'},
              {name: 'منى إبراهيم', text: 'سهولة في حجز المواعيد وخدمة عملاء رائعة.'},
              {name: 'يوسف عبد الله', text: 'خدمات متنوعة تلبي كل احتياجاتي.'},
              {name: 'داليا سمير', text: 'أنصح الجميع بالتعامل مع بنك الاشتراكات.'},
            ].map((client, idx) => (
              <div className="col-md-4 col-lg-2" key={idx}>
                <div className={`card border-0 shadow-lg h-100 text-center p-3 animate__animated animate__fadeInUp animate__delay-${idx+1}s`} style={{borderRadius: 20}}>
                  <div className="d-flex flex-column align-items-center mb-2">
                    <span className="rounded-circle bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center mb-2" style={{width: 56, height: 56}}>
                      <i className="bi bi-person-circle fs-3 text-secondary"></i>
                    </span>
                    <span className="fw-bold text-dark small">{client.name}</span>
                  </div>
                  <div className="text-muted small">{client.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-light py-4 mt-auto border-top">
        <div className="container text-center">
          <span className="fw-bold">بنك الاشتراكات</span> &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
