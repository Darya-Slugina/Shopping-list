const listController = function () {
    // Controller
    const source = document.getElementById("notes").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(list);
  
    let container = document.getElementById("container");
    container.innerHTML = html;
};