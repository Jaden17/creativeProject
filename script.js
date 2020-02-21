alert("Welcome to Lotusville\nLotusville is give the user access to a database of information on molecualr compounds.\ntry searching copounds by name such as \"asprin\" or \"glucose\"");

document.getElementById("compoundSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("compoundInput").value;
  if (value === "")
    return;
  console.log(value);

  resultsDiv = document.getElementById("compoundResults");
  resultsDiv.innerHTML = "searching for..." + value;

  const url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" + value + "/property/MolecularFormula,MolecularWeight,Charge,AtomStereoCount,IUPACName/JSON";
  console.log(url);

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((compoundObj) => {
      console.log(compoundObj);

      let results = "";
      results += "<h1 id='name'>" + value + "</h1>"
      results += "<br/><br/>"
      results += "<h2 id='nomenclatureH'>IUPAC nomenclature designation</h2>"
      results += "<p class='property' id='nomenclature'>" + compoundObj.PropertyTable.Properties[0].IUPACName + "</p>"
      results += "<h2 id='formulaH'>Molecular Formula</h2>"
      results += "<p class='property' id='formula'>" + compoundObj.PropertyTable.Properties[0].MolecularFormula + "</p>"
      results += "<h2 id='weightH'>Molecular Weight</h2>"
      results += "<p class='property' id='weight'>" + compoundObj.PropertyTable.Properties[0].MolecularWeight + "</p>"

      resultsDiv.innerHTML = results;
    });

    const url2 = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" + value + "/description/JSON";
    console.log(url2);

    fetch(url2)
    .then((response) => {
      return response.json();
    })
    .then((compoundObj) => {
      console.log(compoundObj);
      let description = "";

      for (let i=1; i < compoundObj.InformationList.Information.length; i++) {
      description += "<p id='description'>" + compoundObj.InformationList.Information[i].Description + "</p>";
      description += "<p id='DescriptionSourceNameH'>Source</p>"
      description += "<p id='DescriptionSourceName'>" + compoundObj.InformationList.Information[i].DescriptionSourceName + "</p>";
      description += "<br/>"
      }

      document.getElementById("compoundDescription").innerHTML = description;
    })
});

document.getElementById("compoundSubmit").addEventListener("click", function(event) {
  var chop = document.getElementById("welcome");
  chop.style.display = "none";
});
