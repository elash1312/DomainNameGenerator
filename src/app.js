/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "A"];
  let adj = ["gigantic", "hysterical", "happy", "professional"];
  let noun = ["homechef", "crybaby", "blogger", "programmer"];
  let domain = [".com", ".net", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainName.push("  " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
};
