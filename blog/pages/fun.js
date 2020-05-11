const Fun = ()=>(
  <>
  <h1>JS Cool Stuff</h1>
  <div className="js-cool-stuff fun-project">
    <img className="project-image" src="/static/img/fun/js.png" href="http://github.com/Vialor/JS-cool-stuff" alt="js"/>
    <div className="project-intro">
      <p> A github repository to try out some cool JavaScript and CSS (mainly) ideas, including a
        simple piano, 2048 game, timer and more.</p>
      <p> To see my work, use your browser to open the files, "index.html".</p>
    </div>
  </div>
  <h1>Planes</h1>
  <div className="planes fun-project">
    <img className="project-image" src="/static/img/fun/planes.png" href="https://github.com/Vialor/Planes" alt="planes"/>
    <div className="project-intro">
      <p> A simple plane game made with pygame.</p>
      <p> You need both python3 and pygame to run this game.</p>
    </div>
  </div>
  <style jsx>{`.fun-project{
      display:flex;
      align-items: center;
  }

  .fun-project .project-image{
      width: 100px;
  }

  .fun-project a{
      flex-basis: 25%;
  }

  .fun-project .project-intro{
      flex-basis: 75%;
  }`}</style>
  </>
  );

export default Fun;