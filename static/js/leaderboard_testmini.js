document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('APSelect').addEventListener('change', function() {
    var selectedOption = this.value;  
    if (selectedOption === 'AP1') {
      generateTable(AP_strict);
      sortTable.init();
    } else if (selectedOption === 'AP2') {
      generateTable(AP_slight);
      sortTable.init();
    } else if (selectedOption === 'AP3') {
      generateTable(AP_high);
      sortTable.init();
    }
  });
});

function generateTable(data) {
  // var data = AP_strict; // The variable from model_scores.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong>Size</strong></td>
          <td class="js-sort-number"><strong>CQA</strong></td>
          <td class="js-sort-number"><strong>PLT</strong></td>
          <td class="js-sort-number"><strong>XB</strong></td>
          <td class="js-sort-number"><strong>XBN</strong></td>
          <td class="js-sort-number"><strong>XL</strong></td>
          <td class="js-sort-number"><strong>XLN</strong></td>
          <td class="js-sort-number"><strong>XP</strong></td>
          <td class="js-sort-number"><strong>ENBL</strong></td>
          <td class="js-sort-number"><strong>ENP</strong></td>
          <td class="js-sort-number"><strong>ZHBL</strong></td>
          <td class="js-sort-number"><strong>ZHP</strong></td>
      </tr>`;

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // get ALL keys in data
      var keys = Object.keys(data);

      // remove "Human Performance*" from keys
      var index = keys.indexOf(first_row);
      if (index > -1) {
        keys.splice(index, 1);
      }

      // add "Human Performance*" to the top of keys
      keys.unshift(first_row);

      console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`

        // for key = "1", "2", "3"
        top_ranks = ["1"]
        if (top_ranks.includes(key)) {
          table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
          table += `<td><b>${entry.Size}</b></td>`;
          // table += `<td>${entry.Method}</td>`;
          // table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          // table += `<td>${entry.Date}</td>`;
        }
        else {
          table += `<td><b>${entry.Model}</b></td>`;
          table += `<td><b>${entry.Size}</b></td>`;
          // table += `<td>${entry.Method}</td>`;
          // table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          // table += `<td>${entry.Date}</td>`;
        }          
        // if entry.FQA is a number
        if (!isNaN(entry.CQA)) {
          table += `<td>${entry.CQA.toFixed(1).toString()}</td>`;
          table += `<td>${entry.PLT.toFixed(1).toString()}</td>`;
          table += `<td>${entry.XB.toFixed(1).toString()}</td>`;
          table += `<td>${entry.XBN.toFixed(1).toString()}</td>`;
          table += `<td>${entry.XL.toFixed(1).toString()}</td>`;
          table += `<td>${entry.XLN.toFixed(1).toString()}</td>`;
          table += `<td>${entry.XP.toFixed(1).toString()}</td>`;
          table += `<td>${entry.ENBL.toFixed(1).toString()}</td>`;
          table += `<td>${entry.ENP.toFixed(1).toString()}</td>`;
          table += `<td>${entry.ZHBL.toFixed(1).toString()}</td>`;
          table += `<td>${entry.ZHP.toFixed(1).toString()}</td>`;
        }
        else {
        table += `<td>${entry.CQA.toString()}</td>`;
        table += `<td>${entry.PLT.toString()}</td>`;
        table += `<td>${entry.XB.toString()}</td>`;
        table += `<td>${entry.XBN.toString()}</td>`;
        table += `<td>${entry.XL.toString()}</td>`;
        table += `<td>${entry.XLN.toString()}</td>`;
        table += `<td>${entry.XP.toString()}</td>`;
        table += `<td>${entry.ENBL.toString()}</td>`;
        table += `<td>${entry.ENP.toString()}</td>`;
        table += `<td>${entry.ZHBL.toString()}</td>`;
        table += `<td>${entry.ZHP.toString()}</td>`;
        }
        table += '</tr>';
    }

  table += '</table>';
  document.getElementById('testmini_leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

// CALL the function when the window loads
window.onload = generateTable(AP_strict);
