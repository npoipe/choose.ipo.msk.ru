parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\img\\bg.jpg":[["bg.fbf0fc76.jpg","JxVT"],"JxVT"],"./..\\img\\icons\\card_1.png":[["card_1.e4474ec5.png","GJUf"],"GJUf"],"./..\\img\\icons\\card_2.png":[["card_2.05919353.png","FZSi"],"FZSi"],"./..\\img\\icons\\card_3.png":[["card_3.13eb838f.png","gWEj"],"gWEj"],"./..\\img\\icons\\card_4.png":[["card_4.282a46ac.png","qME0"],"qME0"],"./..\\img\\logo-dimmer.png":[["logo-dimmer.e9c8e766.png","GgAa"],"GgAa"],"./..\\img\\diploma\\diploma-1.jpg":[["diploma-1.3b0c3029.jpg","eCTn"],"eCTn"],"./..\\img\\diploma\\diploma-2.jpg":[["diploma-2.00b44512.jpg","nnfU"],"nnfU"],"./..\\img\\diploma\\diploma-3.jpg":[["diploma-3.4d11032a.jpg","nNlu"],"nNlu"],"./..\\img\\svg\\book-black.svg":[["book-black.bd3d696d.svg","UZPd"],"UZPd"],"./..\\img\\svg\\shield-check.svg":[["shield-check.ac66793b.svg","cn3h"],"cn3h"],"./..\\img\\svg\\heart.svg":[["heart.1c22b09d.svg","hzSa"],"hzSa"],"./..\\img\\svg\\calendar.svg":[["calendar.17fdae63.svg","uBBk"],"uBBk"],"./..\\img\\svg\\person-square.svg":[["person-square.0c04083a.svg","nky3"],"nky3"],"./..\\img\\svg\\chat-text.svg":[["chat-text.5c678356.svg","Sn03"],"Sn03"]}],"d6sW":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var n=document.getElementById("section-programs"),e=document.getElementById("body"),i=document.getElementById("dynamic-programs"),r=document.getElementById("dynamic-programs-title"),t=document.getElementById("heading-title"),c=document.getElementById("management"),o=document.getElementById("economics"),L=document.getElementById("pedagogy"),a=document.getElementById("psychology"),T=document.getElementById("healthcare"),H=document.getElementById("informatics"),M=document.getElementById("jurisprudence"),s=document.getElementById("marketing"),d=document.getElementById("technology"),l=function(){window.location.href.includes("management")?new w(this):window.location.href.includes("economics")?new f(this):window.location.href.includes("pedagogy")?new m(this):window.location.href.includes("psychology")?new g(this):window.location.href.includes("healthcare")?new y(this):window.location.href.includes("informatics")?new v(this):window.location.href.includes("jurisprudence")?new E(this):window.location.href.includes("marketing")?new _(this):window.location.href.includes("technology")?new I(this):new w(this),this.init=function(){window.location.href.includes("management")?this.change(new w):window.location.href.includes("economics")?this.change(new f):window.location.href.includes("pedagogy")?this.change(new m):window.location.href.includes("psychology")?this.change(new g):window.location.href.includes("healthcare")?this.change(new y):window.location.href.includes("informatics")?this.change(new v):window.location.href.includes("jurisprudence")?this.change(new E):window.location.href.includes("marketing")?this.change(new _):window.location.href.includes("technology")?this.change(new I):this.change(new w)},this.change=function(n){n}};function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'\n          <div class="cards__card">\n            <div class="card__title">\n              <h3 class="h3">'.concat(n,"</h3>\n            </div>\n            ").concat(e,'\n            <div class="card__btn">\n              <a class="btn btn-primary js-btn-popup">Узнать подробнее</a>\n            </div>\n          </div>\n        ')}function h(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";""!==n&&(n.scrollIntoView(!0),n.scrollTop)}var p='\n              <div class="card__info">\n                <p class="h4 info__hours"><span>🕒</span> <span class="align-helper"><span class="card-info-icon">Объем программы:</span> От 256 часов</span></p>\n                <p class="h4 info__learn-time"><span>🕗</span> <span class="align-helper"><span class="card-info-icon">Длительность обучения:</span> От 1.5мес</span></p>\n                <p class="h4 info__edu-base"><span>📚</span> <span class="align-helper"><span class="card-info-icon">Обучение на базе:</span> Высшего или средне-профессионального образования</span></p>\n              </div>\n              ',w=function(n){window.history.pushState({page_id:1},"","/management"),t.innerHTML="в сфере менеджмента",r.innerHTML="в сфере менеджмента",i.innerHTML=u("Антикризисное управление",p),i.innerHTML+=u("Администрирование в сфере гостиничного сервиса",p),i.innerHTML+=u("Администрирование в спортивных клубах и фитнес-центрах",p),i.innerHTML+=u("Администрирование в развлекательно-досуговой организации",p),i.innerHTML+=u("Руководитель кадровой службы",p),i.innerHTML+=u("Руководитель театрального коллектива",p),i.innerHTML+=u("Руководитель хореографического коллектива",p),i.innerHTML+=u("Менеджер по развитию персонала",p),i.innerHTML+=u("Управление персоналом",p),i.innerHTML+=u("Менеджер по подбору и адаптации персонала",p),i.innerHTML+=u("Специалист по подбору и адаптации персонала",p),i.innerHTML+=u("Менеджер по оценке персонала",p),i.innerHTML+=u("Директор по персоналу",p),i.innerHTML+=u("Специалист по кадровому делопроизводству",p),i.innerHTML+=u("Специалист по кадровому аудиту",p),i.innerHTML+=u("Менеджер по оплате и нормированию труда",p),i.innerHTML+=u("Управление проектами",p),i.innerHTML+=u("Управление инновационными проектами",p),i.innerHTML+=u("Управление качеством",p),i.innerHTML+=u("Стратегический менеджмент",p),i.innerHTML+=u("Менеджмент в образовании в условиях реализации ФГОС",p),i.innerHTML+=u("Менеджмент в сфере гостиничного сервиса",p),i.innerHTML+=u("Менеджмент в сфере общественного питания",p),i.innerHTML+=u("Менеджмент в сфере развлекательно-досуговых услуг",p),i.innerHTML+=u("Менеджмент в сфере туризма и сервиса",p),i.innerHTML+=u("Менеджмент в сфере физической культуры и спорта",p),i.innerHTML+=u("Документоведение и архивоведение",p),i.innerHTML+=u("Финансовый менеджмент",p),i.innerHTML+=u("Организационное и документационное обеспечение управления",p),i.innerHTML+=u("Делопроизводство в государственных и муниципальных учреждениях",p),i.innerHTML+=u("Менеджмент в спортивных учреждениях",p),i.innerHTML+=u("Менеджмент в учреждениях культуры",p),i.innerHTML+=u("Менеджер здравоохранения",p),i.innerHTML+=u("Менеджер образования",p),i.innerHTML+=u("Логистика общая",p),i.innerHTML+=u("Складская логистика",p),i.innerHTML+=u("Транспортная логистика",p),i.innerHTML+=u("Закупочная логистика",p),i.innerHTML+=u("Государственное и муниципальное управление",p),i.innerHTML+=u("Управление развитием региона",p),h(e),k(),A(),D()},f=function(n){window.history.pushState({page_id:2},"","/economics"),t.innerHTML="в сфере экономики",r.innerHTML="в сфере экономики",i.innerHTML=u("Бухгалтерский учет, анализ и аудит",p),i.innerHTML+=u("Бухгалтерский и налоговый учет в организациях малого бизнеса и ИП",p),i.innerHTML+=u("Бухгалтерский учет в некоммерческих организациях",p),i.innerHTML+=u("Бухгалтерский учет и налогообложение",p),i.innerHTML+=u("Международные отношения",p),i.innerHTML+=u("Ведение бухгалтерского учета в бюджетных организациях",p),i.innerHTML+=u("Бухгалтерский учёт и калькуляция на предприятиях общественного питания",p),i.innerHTML+=u("Налоги и налогообложение",p),i.innerHTML+=u("Экономика и управление на предприятии",p),i.innerHTML+=u("Организация внутреннего контроля на предприятии",p),i.innerHTML+=u("Управленческий учет и анализ организации",p),i.innerHTML+=u("Управленческий учет и финансовое планирование в организации",p),i.innerHTML+=u("Анализ и диагностика финансово-хозяйственной деятельности организации",p),i.innerHTML+=u("Финансы и кредит",p),i.innerHTML+=u("Финансовый анализ",p),i.innerHTML+=u("Внутренний аудит",p),i.innerHTML+=u("Страхование",p),i.innerHTML+=u("Экономическая безопасность",p),i.innerHTML+=u("Внешнеэкономическая деятельность",p),i.innerHTML+=u("Рынок ценных бумаг",p),i.innerHTML+=u("Региональная экономика",p),i.innerHTML+=u("Экономист по оплате и нормированию труда",p),h(e),k(),A(),D()},m=function(n){window.history.pushState({page_id:3},"","/pedagogy"),t.innerHTML="в сфере педагогики",r.innerHTML="в сфере педагогики",i.innerHTML=u("Педагог высшего образования",p),i.innerHTML+=u("Педагог обществознания",p),i.innerHTML+=u("Педагог истории",p),i.innerHTML+=u("Логопедия",p),i.innerHTML+=u("Специальное (дефектологическое) образование",p),i.innerHTML+=u("Педагог основ безопасности жизнедеятельности",p),i.innerHTML+=u("Педагог среднего профессионального образования",p),i.innerHTML+=u("Педагог экологии",p),i.innerHTML+=u("Педагог-психолог",p),i.innerHTML+=u("Педагогика и психология образования",p),i.innerHTML+=u("Психолого-педагогическое сопровождение образовательного процесса",p),i.innerHTML+=u("Педагог высшей школы",p),i.innerHTML+=u("Педагогика раннего развития",p),i.innerHTML+=u("Педагогическая деятельность в области воспитания и социализации личности",p),i.innerHTML+=u("Педагогика и методика дошкольного образования с дополнительной подготовкой в области предшкольной подготовки",p),i.innerHTML+=u("Дошкольная педагогика и психология в условиях реализации ФГОС ДО",p),i.innerHTML+=u("Общая педагогика: теория и методика обучения в рамках реализации ФГОС",p),i.innerHTML+=u("Педагогика и методика начального образования в рамках реализации ФГОС",p),i.innerHTML+=u("Педагогика и психология дошкольного образования в условиях реализации ФГОС ДО",p),i.innerHTML+=u("Подготовка детей к школьному обучению в дошкольной образовательной организации",p),i.innerHTML+=u("Физическая культура в дошкольных образовательных организациях в рамках реализации ФГОС (базовая)",p),i.innerHTML+=u("Физическая культура в дошкольных образовательных организациях в рамках реализации ФГОС",p),i.innerHTML+=u("Физическая культура в образовательных организациях в рамках реализации ФГОС (базовая)",p),i.innerHTML+=u("Физическая культура в образовательных организациях в рамках реализации ФГОС",p),i.innerHTML+=u("Физкультурно-оздоровительная деятельность по плаванию с детьми дошкольного возраста",p),i.innerHTML+=u("Библиотечно-педагогическая деятельность",p),i.innerHTML+=u("Инструктор по детскому фитнесу",p),i.innerHTML+=u("Тренер-преподаватель по адаптивной физической культуре",p),i.innerHTML+=u("Педагогика и методика начального образования",p),i.innerHTML+=u("Дошкольная педагогика и психология",p),i.innerHTML+=u("Дошкольная педагогика, воспитатель ДОО",p),i.innerHTML+=u("Методист дошкольного образования",p),i.innerHTML+=u("Методическое обеспечение среднего профессионального образования",p),i.innerHTML+=u("Методология и технология педагогической деятельности",p),i.innerHTML+=u("Музыкальный руководитель в дошкольной образовательной организации",p),i.innerHTML+=u("Музыкальное воспитание и эстетическое развитие детей в дошкольной образовательной организации",p),i.innerHTML+=u("Организация и проведение практических занятий по адаптивной физической культуре",p),i.innerHTML+=u("Организация и проведение тренировочного процесса",p),i.innerHTML+=u("Организация и содержание логопедической работы",p),h(e),k(),A(),D()},g=function(n){window.history.pushState({page_id:4},"","/psychology"),t.innerHTML="в сфере психологии",r.innerHTML="в сфере психологии",i.innerHTML=u("Психология",p),i.innerHTML+=u("Психология: Очно-заочная (вечерняя) форма обучения",p),i.innerHTML+=u("Клиническая психология",p),i.innerHTML+=u("Психология личности",p),i.innerHTML+=u("Социальная психология в бизнесе",p),i.innerHTML+=u("Социальная психология",p),i.innerHTML+=u("Психология служебной деятельности",p),i.innerHTML+=u("Спортивная психология",p),i.innerHTML+=u("Психолог-тренер",p),i.innerHTML+=u("Нейропсихология",p),i.innerHTML+=u("Акмеология и психология развития",p),i.innerHTML+=u("Школьный психолог",p),i.innerHTML+=u("Детская психология",p),i.innerHTML+=u("Психология семьи с основами психотерапии",p),i.innerHTML+=u("Психология дошкольного образования в условиях реализации ФГОС ДО",p),i.innerHTML+=u("Социальная работа",p),i.innerHTML+=u("Социальный педагог",p),i.innerHTML+=u("Руководитель организации социального обслуживания",p),i.innerHTML+=u("Организация социального обслуживания населения",p),i.innerHTML+=u("Деятельность органов опеки и попечительства в отношении несовершеннолетних",p),i.innerHTML+=u("Политология",p),i.innerHTML+=u("Религиоведение",p),i.innerHTML+=u("Культурология",p),i.innerHTML+=u("Социология",p),i.innerHTML+=u("Философия",p),h(e),k(),A(),D()},y=function(n){window.history.pushState({page_id:5},"","/healthcare"),t.innerHTML="в сфере медицины",r.innerHTML="в сфере медицины",i.innerHTML=u("Клиническая фармакология",p),i.innerHTML+=u("Психиатрия",p),i.innerHTML+=u("Психотерапия",p),i.innerHTML+=u("Сестринский уход в физиотерапевтической практике",p),i.innerHTML+=u("Акушерское дело",p),i.innerHTML+=u("Сестринское дело",p),i.innerHTML+=u("Организация сестринского дела",p),i.innerHTML+=u("Сестринское дело в косметологии",p),i.innerHTML+=u("Сестринское дело в педиатрии",p),i.innerHTML+=u("Сестринское дело в онкологии",p),i.innerHTML+=u("Сестринское дело в терапии",p),i.innerHTML+=u("Сестринское дело в хирургии",p),i.innerHTML+=u("Лабораторное дело",p),i.innerHTML+=u("Операционное дело",p),i.innerHTML+=u("Общая практика",p),i.innerHTML+=u("Медицинская сестра врача общей практики",p),i.innerHTML+=u("Медико-социальная помощь",p),i.innerHTML+=u("Организация здравоохранения и общественное здоровье",p),i.innerHTML+=u("Медицинская статистика",p),i.innerHTML+=u("Судебно-медицинская экспертиза(СМП)",p),i.innerHTML+=u("Судебно-медицинская экспертиза",p),i.innerHTML+=u("Диетология",p),i.innerHTML+=u("Наркология",p),i.innerHTML+=u("Онкология",p),i.innerHTML+=u("Остеопатия",p),i.innerHTML+=u("Ревматология",p),i.innerHTML+=u("Рентгенология",p),i.innerHTML+=u("Паразитология",p),i.innerHTML+=u("Стоматология",p),i.innerHTML+=u("Стоматология общей практики",p),i.innerHTML+=u("Стоматология детская",p),i.innerHTML+=u("Стоматология хирургическая",p),i.innerHTML+=u("Стоматология ортопедическая",p),i.innerHTML+=u("Стоматология терапевтическая",p),i.innerHTML+=u("Педиатрия",p),i.innerHTML+=u("Патологическая анатомия",p),i.innerHTML+=u("Сексология",p),i.innerHTML+=u("Фтизиатрия",p),i.innerHTML+=u("Гистология",p),i.innerHTML+=u("Эпидемиология",p),i.innerHTML+=u("Эндоскопия",p),i.innerHTML+=u("Бактериология",p),i.innerHTML+=u("Фельдшер",p),i.innerHTML+=u("Дезинфекционное дело",p),i.innerHTML+=u("Травматология и ортопедия",p),i.innerHTML+=u("Анестезиология и реаниматология",p),i.innerHTML+=u("Гигиеническое воспитание",p),i.innerHTML+=u("Лечебная физкультура и спортивная медицина",p),h(e),k(),A(),D()},v=function(n){window.history.pushState({page_id:6},"","/informatics"),t.innerHTML="в сфере информатики",r.innerHTML="в сфере информатики",i.innerHTML=u("Информатика и вычислительная техника",p),i.innerHTML+=u("Вычислительные машины, комплексы, системы и сети",p),i.innerHTML+=u("Технология разработки программного обеспечения",p),i.innerHTML+=u("Технология разработки мобильного приложения",p),i.innerHTML+=u("Программное обеспечение средств вычислительной техники и автоматизированных систем",p),i.innerHTML+=u("Информационные управляющие комплексы систем безопасности объектов",p),h(e),k(),A(),D()},E=function(n){window.history.pushState({page_id:7},"","/jurisprudence"),t.innerHTML="в сфере юриспруденции",r.innerHTML="в сфере юриспруденции",i.innerHTML=u("Юриспруденция",p),i.innerHTML+=u("Сделки с недвижимостью",p),i.innerHTML+=u("Специалист договорного отдела",p),i.innerHTML+=u("Юриспруденция: гражданско-правовой профиль",p),i.innerHTML+=u("Правовое сопровождение социального обеспечения граждан Р.Ф.",p),h(e),k(),A(),D()},_=function(n){window.history.pushState({page_id:8},"","/marketing"),t.innerHTML="в сфере маркетинга",r.innerHTML="в сфере маркетинга",i.innerHTML=u("Менеджер по маркетингу",p),i.innerHTML+=u("Интернет-маркетинг",p),i.innerHTML+=u("Директор по маркетингу",p),i.innerHTML+=u("Реклама и PR (Рссо)",p),i.innerHTML+=u("PR менеджер",p),i.innerHTML+=u("Основы брендинга и рекламы",p),i.innerHTML+=u("Журналистика",p),h(e),k(),A(),D()},I=function(n){window.history.pushState({page_id:9},"","/technology"),t.innerHTML="в технической сфере",r.innerHTML="в технической сфере",i.innerHTML=u("Промышленное и гражданское строительство",p),i.innerHTML+=u("Проектирование зданий и сооружений",p),i.innerHTML+=u("Эксплуатация зданий и сооружений",p),i.innerHTML+=u(" Электроэнергетические системы и сети",p),i.innerHTML+=u("Электрооборудование и электрохозяйство предприятий, организаций и учреждений",p),i.innerHTML+=u("Теплоэнергетика и теплотехника",p),i.innerHTML+=u("Промышленная теплоэнергетика",p),i.innerHTML+=u("Охрана труда",p),i.innerHTML+=u("Организация системы управления охраной труда",p),i.innerHTML+=u("Охрана труда и техносферная безопасность",p),i.innerHTML+=u("Управление охраной труда и обеспечение безопасности на рабочих местах",p),i.innerHTML+=u("Техносферная безопасность",p),i.innerHTML+=u("Технология транспортных процессов в области организации и безопасности дорожного движения",p),h(e),k(),A(),D()},B=new l;function k(){var n=document.querySelectorAll(".js-btn-popup");Array.prototype.slice.call(n).forEach(function(n){n.addEventListener("click",S)})}function S(n){var e=document.getElementById("module-1"),i=document.getElementById("popup-form-user-number");e.classList.add("show");var r=n.target.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML,t=document.querySelectorAll(".choosen-program");Array.prototype.slice.call(t).forEach(function(n){n.value=r}),i.focus(),document.body.addEventListener("click",b)}function b(n){var e=document.getElementById("module-1");n.target===e&&e.contains(n.target)&&e.classList.remove("show")}function A(){var n=document.querySelectorAll("#dynamic-programs .cards__card"),e=Array.prototype.slice.call(n),i=document.getElementById("load-more-cards__btn"),r=0;e.forEach(function(n){r>=5||(n.classList.add("show"),r++)}),i.addEventListener("click",function(){r+=5,e.forEach(function(n,e){e>=r||n.classList.add("show")})})}function D(){var n=document.querySelectorAll(".section-our-clients .carousel__item"),e=Array.prototype.slice.call(n),i=document.getElementById("load-more-clients__btn"),r=0;e.forEach(function(n){r>=6||(n.classList.add("show"),r++)}),i.addEventListener("click",function(){r+=6,e.forEach(function(n,e){e>=r||n.classList.add("show")})})}function q(){var n=document.querySelectorAll(".input-user-number"),e=document.querySelectorAll(".input-user-name"),i=Array.prototype.slice.call(e),r=Array.prototype.slice.call(n),t=0;r.forEach(function(n){n.addEventListener("keydown",function(){++t>3&&i.forEach(function(n){n.classList.add("show")})})})}B.init(),c.addEventListener("click",function(n){B.change(new w),n.preventDefault()}),o.addEventListener("click",function(n){B.change(new f),n.preventDefault()}),L.addEventListener("click",function(n){B.change(new m),n.preventDefault()}),a.addEventListener("click",function(n){B.change(new g),n.preventDefault()}),T.addEventListener("click",function(n){B.change(new y),n.preventDefault()}),H.addEventListener("click",function(n){B.change(new v),n.preventDefault()}),M.addEventListener("click",function(n){B.change(new E),n.preventDefault()}),s.addEventListener("click",function(n){B.change(new _),n.preventDefault()}),d.addEventListener("click",function(n){B.change(new I),n.preventDefault()}),A(),D(),q();
},{"../scss/main.scss":"fx60"}]},{},["d6sW"], null)
//# sourceMappingURL=main.a3bd7720.js.map