var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	var nameField = document.getElementById("name");
	nameField.focus();

	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	var sum = 0;
	for(var i=0;i<scores.length;i++)
	{
		sum+=scores[i];
	}
	average = (sum/(scores.length)).toFixed(2);
	var highest = 0;
	for(var i=0;i<scores.length;i++)
	{
		if(i===0){
			highest = scores[i];
		}
		if(scores[i]>highest){
			highest = scores[i];
		}
		
		
	}
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> Highest score is "+highest + "<br \>"
}

function displayScores(){
	var table= "<tr><th>Name</th><th>Score</th></tr>"
	for(var i=0;i<scores.length;i++)
	{
		table+=" <tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>"
	}
	document.getElementById("scores_table").innerHTML="<h2> Scores </h2>"+table;
}
function addScore(){
	var name = document.getElementById("name").value;
	var score = document.getElementById("score").value;
	if (name.trim() === "" || score.trim() === "" || isNaN(parseFloat(score)) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score.");
		return;
	}
	names.push(name);
	scores.push(parseInt(score));
	var nameField = document.getElementById("name");
	nameField.focus();
}


