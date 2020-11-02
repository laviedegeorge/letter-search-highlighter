import "./styles.css";

function highlightSearch() {
  let searchText = document.getElementById("search_input").value;
  let query = new RegExp(`(${searchText})`, "gmi");
  let textHolderContent = document.getElementById("text_holder").innerHTML;
  let newTextHolderContent = textHolderContent.replace(
    /(<span>|<\/span>)/gim,
    ""
  );
  document.getElementById("text_holder").innerHTML = newTextHolderContent;
  let highLightedWord = newTextHolderContent.replace(query, "<span>$1</span>");
  document.getElementById("text_holder").innerHTML = highLightedWord;
}

document.getElementById("search_input").addEventListener("keyup", () => {
  highlightSearch();
});
/* const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{highlightSearch()}); */
