import custom1 from "./img/customers/customer-1.jpg"
import custom2 from "./img/customers/customer-2.jpg"
import custom3 from "./img/customers/customer-3.jpg"
import custom4 from "./img/customers/customer-4.jpg"
import custom5 from "./img/customers/customer-5.jpg"
import custom6 from "./img/customers/customer-6.jpg"
import gallery1 from './img/gallery/gallery-1.jpg'
import gallery2 from './img/gallery/gallery-2.jpg'
import gallery3 from './img/gallery/gallery-3.jpg'
import gallery4 from './img/gallery/gallery-4.jpg'
import gallery5 from './img/gallery/gallery-5.jpg'
import gallery6 from './img/gallery/gallery-6.jpg'
import gallery7 from './img/gallery/gallery-7.jpg'
import gallery8 from './img/gallery/gallery-8.jpg'
import gallery9 from './img/gallery/gallery-9.jpg'
import gallery10 from './img/gallery/gallery-10.jpg'
import gallery11 from './img/gallery/gallery-11.jpg'
import gallery12 from './img/gallery/gallery-12.jpg'
import dave from './img/customers/dave.jpg'
import ben from './img/customers/ben.jpg'
import steve from './img/customers/steve.jpg'
import hannah from './img/customers/hannah.jpg'
import omnifoodLogo from './img/omnifood-logo.png'
import techcrunch from './img/logos/techcrunch.png'
import businessInsider from './img/logos/business-insider.png'
import nyT from './img/logos/the-new-york-times.png'
import forbes from './img/logos/forbes.png'
import usaToday from './img/logos/usa-today.png'
import heroMin from './img/hero-min.png'
import hero from './img/hero.webp'
import screen1 from './img/app/app-screen-1.png'
import screen2 from './img/app/app-screen-2.png'
import screen3 from './img/app/app-screen-3.png'
import meal1 from './img/meals/meal-1.jpg'
import meal2 from './img/meals/meal-2.jpg'
import './css/general.css'
import './css/queries.css'
import './css/style.css'


function App() {
  return (
    <div>
      <div className="App">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="智能饮食助手 is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional needs."
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="icon" href="img/favicon.png" />
          <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
          <link rel="manifest" href="manifest.webmanifest" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="css/general.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/queries.css" />

          <script
            type="module"
            src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule=""
            src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
          ></script>
          <script defer src="js/script.js"></script>

          <title>智能饮食助手 &mdash; Never cook again!</title>
        </head>
        <body>
          <header class="header">
            <a href="#">
              <img
                class="logo"
                alt="智能饮食助手 logo"
                src={omnifoodLogo}
              />
            </a>

            <nav class="main-nav">
              <ul class="main-nav-list">
                <li>
                  <a class="main-nav-link" href="#how">
                    它是如何让您更健康的
                  </a>
                </li>
                <li>
                  <a class="main-nav-link" href="#meals">
                    健康饮食
                  </a>
                </li>
                <li>
                  <a class="main-nav-link" href="#testimonials">
                    用户故事
                  </a>
                </li>
                <li>
                  <a class="main-nav-link" href="#pricing">
                    定价
                  </a>
                </li>
                <li>
                  <a class="main-nav-link nav-cta" href="#cta">
                    免费尝试
                  </a>
                </li>
              </ul>
            </nav>

            <button class="btn-mobile-nav">
              <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
              <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
            </button>
          </header>

          <main>
            <section class="section-hero">
              <div class="hero">
                <div class="hero-text-box">
                  <h1 class="heading-primary">您健康的每一餐</h1>
                  <p class="hero-description">
                    根据您的个人口味和营养需求量身定制，一年 365
                    天的智能食品参考，将使您重新开始健康饮食。
                  </p>
                  <a href="#cta" class="btn btn--full margin-right-sm">
                    开始健康生活
                  </a>

                  <a href="#how" class="btn btn--outline">
                    了解我们 &darr;
                  </a>
                  <div class="delivered-meals">
                    <div class="delivered-imgs">
                      <img
                        src={custom1}
                        alt="Customer photo"
                      />
                      <img
                        src={custom2}
                        alt="Customer photo"
                      />
                      <img
                        src={custom3}
                        alt="Customer photo"
                      />
                      <img
                        src={custom4}
                        alt="Customer photo"
                      />
                      <img
                        src={custom5}
                        alt="Customer photo"
                      />
                      <img
                        src={custom6}
                        alt="Customer photo"
                      />
                    </div>
                    <p class="delivered-text">
                      {/* <span>250,000+</span> */}
                    </p>
                  </div>
                </div>
                <div class="hero-img-box">
                  <picture>
                    <source srcset={hero} type="image/webp" />
                    <source srcset={heroMin} type="image/png" />

                    <img
                      src={heroMin}
                      class="hero-img"
                      alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                    />
                  </picture>
                </div>
              </div>
            </section>

            <section class="section-featured">
              <div class="container">
                <h2 class="heading-featured-in">As featured in</h2>
                <div class="logos">
                  <img 
                    src={techcrunch}
                    alt="Techcrunch logo" />
                  <img
                    src={businessInsider}
                    alt="Business Insider logo"
                  />
                  <img
                    src={nyT}
                    alt="The New York Times logo"
                  />
                  <img 
                    src={forbes}
                    alt="Forbes logo"
                  />
                  <img 
                    src={usaToday}
                    alt="USA Today logo"
                  />
                </div>
              </div>
            </section>

            <section class="section-how" id="how">
              <div class="container">
                <span class="subheading">它是如何让您更健康的</span>
                <h2 class="heading-secondary">每日健康饮食只需三步！</h2>
              </div>

              <div class="container grid grid--2-cols grid--center-v">
                <div class="step-text-box">
                  <p class="step-number">01</p>
                  <h3 class="heading-tertiary">请描述您的偏好</h3>
                  <p class="step-description">
                    再也不用浪费时间思考要吃什么了！
                    我们将使用大模型为您创建一个100%个性化的每周餐食计划，确保您获得所需的所有营养和维生素，无论您遵循什么饮食习惯！
                  </p>
                </div>

                <div class="step-img-box">
                  <img
                    src={screen1}
                    class="step-img"
                    alt="iPhone app
            preferences selection screen"
                  />
                </div>

                <div class="step-img-box">
                  <img
                    src={screen2}
                    class="step-img"
                    alt="iPhone app
            meal approving plan screen"
                  />
                </div>
                <div class="step-text-box">
                  <p class="step-number">02</p>
                  <h3 class="heading-tertiary">对您的食谱进行营养分析</h3>
                  <p class="step-description">
                    每周一次，由我们为您生成的餐食计划。您也可以向AI询问营养指南更改食材，甚至添加您自己的食谱。"
                  </p>
                </div>

                <div class="step-text-box">
                  <p class="step-number">03</p>
                  <h3 class="heading-tertiary">强大的饮食追踪</h3>
                  <p class="step-description">
                  我们不仅仅会记录你的每一餐，更会自动为你呈现总热量和各种丰富的营养成分。蛋白质、碳水化合物、脂肪、维生素、矿物质，一应俱全。这不仅是记录，更是关于你身体每一寸的活力！
                  </p>
                </div>
                <div class="step-img-box">
                  <img
                    src={screen3}
                    class="step-img"
                    alt="iPhone app
            delivery screen"
                  />
                </div>
              </div>
            </section>

            <section class="section-meals" id="meals">
              <div class="container center-text">
                <span class="subheading">Meals</span>
                <h2 class="heading-secondary">大模型为您选择多样化的食谱</h2>
              </div>

              <div class="container grid grid--3-cols margin-bottom-md">
                <div class="meal">
                  <img
                    src={meal1}
                    class="meal-img"
                    alt="Japanese Gyozas"
                  />
                  <div class="meal-content">
                    <div class="meal-tags">
                      <span class="tag tag--vegetarian">素食者</span>
                    </div>
                    <p class="meal-title">日本 Gyozas</p>
                    <ul class="meal-attributes">
                      <li class="meal-attribute">
                        <ion-icon
                          class="meal-icon"
                          name="flame-outline"
                        ></ion-icon>
                        <span>
                          <strong>650</strong> 卡路里
                        </span>
                      </li>
                      <li class="meal-attribute">
                        <ion-icon
                          class="meal-icon"
                          name="restaurant-outline"
                        ></ion-icon>
                        <span>
                          营养评分 &reg; <strong>74</strong>
                        </span>
                      </li>
                      <li class="meal-attribute">
                        <ion-icon
                          class="meal-icon"
                          name="star-outline"
                        ></ion-icon>
                        <span>
                          <strong>4.9</strong> 评价人数 (537)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="meal">
                  <img
                    src={meal2}
                    class="meal-img"
                    alt="Avocado Salad"
                  />
                  <div class="meal-content">
                    <div class="meal-tags">
                      <span class="tag tag--vegan">严格素食主义者</span>
                      <span class="tag tag--paleo">古食派</span>
                    </div>
                    <p class="meal-title">Avocado 沙拉</p>
                    <ul class="meal-attributes">
                      <li class="meal-attribute">
                        <ion-icon
                          class="meal-icon"
                          name="flame-outline"
                        ></ion-icon>
                        <span>
                          <strong>400</strong> 卡路里
                        </span>
                      </li>
                      <li class="meal-attribute">
                        <ion-icon
                          class="meal-icon"
                          name="restaurant-outline"
                        ></ion-icon>
                        <span>
                          营养评分 &reg; <strong>92</strong>
                        </span>
                      </li>
                      <li class="meal-attribute">
                        <ion-icon
                          class="meal-icon"
                          name="star-outline"
                        ></ion-icon>
                        <span>
                          <strong>4.8</strong> 评价人数 (441)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="diets">
                  <h3 class="heading-tertiary">适用于任何饮食偏好:</h3>
                  <ul class="list">
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>素食主义者</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>严格素食主义者</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>鱼素主义</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>不含麸质</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>不含乳糖</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>酮类</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>古食派</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>低腹敏饮食</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>为宝宝设计</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="container all-recipes">
                <a href="/recommend" class="link">
                  尝试菜谱推荐 &rarr;
                </a>
              </div>
            </section>

            <section class="section-testimonials" id="testimonials">
              <div class="testimonials-container">
                <span class="subheading">用户故事</span>
                <h2 class="heading-secondary">一旦尝试，回味无穷</h2>

                <div class="testimonials">
                  <figure class="testimonial">
                    <img
                      class="testimonial-img"
                      alt="顾客 Dave Bryson 的照片"
                      src={dave}
                    />
                    <blockquote class="testimonial-text">
                      健康又美味的餐点，简直就像魔法一般。
                    </blockquote>
                    <p class="testimonial-name">&mdash; Dave Bryson</p>
                  </figure>

                  <figure class="testimonial">
                    <img
                      class="testimonial-img"
                      alt="顾客 Ben Hadley 的照片"
                      src={ben}
                    />
                    <blockquote class="testimonial-text">
                      这个人工智能算法太厉害了，每次都为我选择合适的餐点。不再为食物而担心真是太神奇了！
                    </blockquote>
                    <p class="testimonial-name">&mdash; Ben Hadley</p>
                  </figure>

                  <figure class="testimonial">
                    <img
                      class="testimonial-img"
                      alt="顾客 Steve Miller 的照片"
                      src={steve}
                    />
                    <blockquote class="testimonial-text">
                      智能饮食助手
                      真是个救星！我刚刚创办了一家公司，所以搭配午餐。现在我离不开每日的餐点了！
                    </blockquote>
                    <p class="testimonial-name">&mdash; Steve Miller</p>
                  </figure>

                  <figure class="testimonial">
                    <img
                      class="testimonial-img"
                      alt="顾客 Hannah Smith 的照片"
                      src={hannah}
                    />
                    <blockquote class="testimonial-text">
                      我为整个家庭选择了
                      foodhelper，它为我们节省了很多时间！而且，所有食物都是有机的，素食的，没有塑料包装。
                    </blockquote>
                    <p class="testimonial-name">&mdash; Hannah Smith</p>
                  </figure>
                </div>
              </div>

              <div class="gallery">
                <figure class="gallery-item">
                  <img
                    src={gallery1}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery2}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery3}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery4}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery5}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery6}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery7}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery8}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery9}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery10}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery11}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
                <figure class="gallery-item">
                  <img
                    src={gallery12}
                    alt="Photo of beautifully arranged food"
                  />
                </figure>
              </div>
            </section>

            <section class="section-pricing" id="pricing">
              <div class="container">
                <span class="subheading">Pricing</span>
                <h2 class="heading-secondary">
                  Eating well without breaking the bank
                </h2>
              </div>

              <div class="container grid grid--2-cols margin-bottom-md">
                <div class="pricing-plan pricing-plan--starter">
                  <header class="plan-header">
                    <p class="plan-name">试用版</p>
                    <p class="plan-price">
                      <span>$</span>399
                    </p>
                    <p class="plan-text">
                      per month. That's just $13 per meal!
                    </p>
                  </header>
                  <ul class="list">
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>每天1顿餐</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>从上午11点至晚上9点下单</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>免费配送</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="close-outline"
                      ></ion-icon>
                      <span>获取最新食谱</span>
                    </li>
                  </ul>
                  <div class="plan-sing-up">
                    <a href="#" class="btn btn--full">
                      让我们一起健康饮食
                    </a>
                  </div>
                </div>

                <div class="pricing-plan pricing-plan--complete">
                  <header class="plan-header">
                    <p class="plan-name">完整版</p>
                    <p class="plan-price">
                      <span>$</span>649
                    </p>
                    <p class="plan-text">每月。每餐只需$11！</p>
                  </header>
                  <ul class="list">
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>
                        <strong>每天2餐</strong>
                      </span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>
                        全天候<strong>24/7</strong>订餐
                      </span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>免费送货</span>
                    </li>
                    <li class="list-item">
                      <ion-icon
                        class="list-icon"
                        name="checkmark-outline"
                      ></ion-icon>
                      <span>获取最新食谱</span>
                    </li>
                  </ul>
                  <div class="plan-sing-up">
                    <a href="#" class="btn btn--full">
                      让我们一起健康饮食
                    </a>
                  </div>
                </div>
              </div>

              <div class="container grid">
                <aside class="plan-details">
                  价格已包含所有适用税款。您可以随时取消订阅。两个计划都包括以下内容：
                </aside>
              </div>

              <div class="container grid grid--4-cols">
                <div class="feature">
                  <ion-icon
                    class="feature-icon"
                    name="infinite-outline"
                  ></ion-icon>
                  <p class="feature-title">永不烦恼配餐！</p>
                  <p class="feature-text">
                    我们的订阅涵盖每年365天，甚至包括主要假期。
                  </p>
                </div>
                <div class="feature">
                  <ion-icon
                    class="feature-icon"
                    name="nutrition-outline"
                  ></ion-icon>
                  <p class="feature-title">本地和有机</p>
                  <p class="feature-text">
                    我们的厨师只使用本地、新鲜和有机产品为您准备餐点。
                  </p>
                </div>
                <div class="feature">
                  <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
                  <p class="feature-title">零浪费</p>
                  <p class="feature-text">
                    所有我们的合作伙伴只使用可重复使用的容器包装所有您的餐点。
                  </p>
                </div>
                <div class="feature">
                  <ion-icon
                    class="feature-icon"
                    name="pause-outline"
                  ></ion-icon>
                  <p class="feature-title">随时暂停</p>
                  <p class="feature-text">
                    准备度假？只需暂停您的订阅，我们将退还未使用的天数。
                  </p>
                </div>
              </div>
            </section>

            <section class="section-cta" id="cta">
              <div class="container">
                <div class="cta">
                  <div class="cta-text-box">
                    <h2 class="heading-secondary">立刻尝试吧！</h2>
                    <p class="cta-text">
                      健康、美味且无忧的配方正在等着您。从今天开始健康饮食。您可以随时取消或暂停。
                    </p>

                    <form class="cta-form" name="sign-up" netlify>
                      <div>
                        <label for="full-name">全名</label>
                        <input
                          id="full-name"
                          type="text"
                          placeholder="东方白"
                          name="full-name"
                          required
                        />
                      </div>

                      <div>
                        <label for="email">电子邮件地址</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="me@example.com"
                          name="email"
                          required
                        />
                      </div>

                      <div>
                        <label for="select-where">您从哪里得知我们？</label>
                        <select id="select-where" name="select-where" required>
                          <option value="">请选择一个选项：</option>
                          <option value="friends">朋友和家人</option>
                          <option value="youtube">B站视频</option>
                          <option value="podcast">播客</option>
                          <option value="ad">腾讯视频广告</option>
                          <option value="others">其他</option>
                        </select>
                      </div>
                      <a href="/healthInfo" style={{textDecoration:'none'}} className="btn btn--form">立即注册</a>
                      
                    </form>
                  </div>
                  <div
                    class="cta-img-box"
                    role="img"
                    aria-label="Woman enjoying food"
                  ></div>
                </div>
              </div>
            </section>
          </main>

          <footer class="footer">
            <div class="container grid grid--footer">
              <div class="logo-col">
                <a href="#" class="footer-logo">
                  <img
                    class="logo"
                    alt="智能饮食助手 logo"
                    src={omnifoodLogo}
                  />
                </a>

                <ul class="social-links">
                  <li>
                    <a class="footer-link" href="#">
                      <ion-icon
                        class="social-icon"
                        name="logo-instagram"
                      ></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      <ion-icon
                        class="social-icon"
                        name="logo-facebook"
                      ></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      <ion-icon
                        class="social-icon"
                        name="logo-twitter"
                      ></ion-icon>
                    </a>
                  </li>
                </ul>

                <p class="copyright">
                  Copyright &copy; <span class="year">2027</span> by
                  智能饮食助手, Inc. All rights reserved.
                </p>
              </div>

              <div class="address-col">
                <p class="footer-heading">联系我们</p>
                <address class="contacts">
                  <p class="address">
                    623 Harrison St., 2nd Floor, San Francisco, CA 94107
                  </p>
                  <p>
                    <a class="footer-link" href="tel:415-201-6370">
                      415-201-6370
                    </a>
                    <br />
                    <a class="footer-link" href="mailto:hello@foodhelper.com">
                      hello@foodhelper.com
                    </a>
                  </p>
                </address>
              </div>

              <nav class="nav-col">
                <p class="footer-heading">账户</p>
                <ul class="footer-nav">
                  <li>
                    <a class="footer-link" href="#">
                      创建账户
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      登录
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      iOS 应用
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      Android 应用
                    </a>
                  </li>
                </ul>
              </nav>

              <nav class="nav-col">
                <p class="footer-heading">公司</p>
                <ul class="footer-nav">
                  <li>
                    <a class="footer-link" href="#">
                      关于 智能饮食助手
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      商业合作
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      烹饪合作伙伴
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      职业机会
                    </a>
                  </li>
                </ul>
              </nav>

              <nav class="nav-col">
                <p class="footer-heading">资源</p>
                <ul class="footer-nav">
                  <li>
                    <a class="footer-link" href="#">
                      食谱目录
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      帮助中心
                    </a>
                  </li>
                  <li>
                    <a class="footer-link" href="#">
                      隐私与条款
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </body>
      </div>
    </div>
  );
}

export default App;
