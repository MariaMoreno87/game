(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){e.exports=n(25)},20:function(e,a,n){},25:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),o=n(7),r=n.n(o),i=(n(20),n(28)),c=n(27),s=n(26),m=function(){return l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.a,{to:"/game",className:"/game"===window.location.pathname?"nav-link active":"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.a,{to:"/game/about",className:"/game/about"===window.location.pathname?"nav-link active":"nav-link"},"About")))},u=n(8),d=n(11),h=n(9),g=n(12),p=function(e){function a(){var e,n;Object(u.a)(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).state={gameInstance:null},n.componentDidMount=function(){n.setState({gameInstance:window.UnityLoader.instantiate("gameContainer","/game/content/games/Build/HotDog.json",{onProgress:window.UnityProgress})})},n.handleClick=function(){n.state.gameInstance.SetFullscreen(1)},n.render=function(){return l.a.createElement("div",{className:"webgl-content"},l.a.createElement("div",{id:"gameContainer"}),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"webgl-logo"}),l.a.createElement("div",{className:"fullscreen",onClick:n.handleClick}),l.a.createElement("div",{className:"title"},"Word Typing Game")))},n}return Object(g.a)(a,e),a}(l.a.Component),w=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h1",null,"About Typing Knight"),l.a.createElement("p",null,"Are you looking for the best online typing game? Typing Knight is a way to hone your keyboarding skills and have fun at the same time. Typing Knight is an educational game where you learn to type words quickly. Your missions is to attempt to survive an attack by typing the words correctly. As the action heats up, the moving words will be falling in a higher speed, staying cool and calm will be your best stradedy. Once the game ends you will provide with a final score. Scores can be a good way to compare scores with a friend and start a friendly competition. Typing Knight, overall, provides a fun environment to practice typing skills, just watch the clock, here and there, because Typing Knight can be addictive and provide hours of enjoyment!"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h1",null,"About Code-Vengers"),l.a.createElement("p",null,"Hello we are Maria Moreno, Richard Baylis, and William Lan also known as The Code-Vengers!! We are a group of self-driven, hard working and  quick learning individuals who love to challenge ourselves and use the latest technologies..... and that was our inspiration to create a game! We pushed ourselves not only to use software we know such as HTML5, CSS, JavaScript, React-JS, node, JSON, but learn new software like Unity and C#. Together as a team we challenged, helped and supported each other to create \u201cType Knight\u201d. We truly hope you enjoy playing it as much as we enjoyed making it!!"),l.a.createElement("hr",null))},y=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(c.a,{exact:!0,path:"/game",component:p}),l.a.createElement(c.a,{exact:!0,path:"/game/about",component:w})))};r.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.f128fcae.chunk.js.map