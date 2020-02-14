'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('.project a').click(addProjectDetails);

    // $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
    // Prevent following the link
    e.preventDefault();

    // Get the div ID, e.g., "project3"
    var projectID = $(this).closest('.project').attr('id');
    // get rid of 'project' from the front of the id 'project3'
    var idNumber = projectID.substr('project'.length);

    var projectURL = $.get("https://lab6-jeffreylwc.herokuapp.com/project/" + idNumber, callBackFunc);

    console.log("User clicked on project " + idNumber);
    console.log("Project URL " + "https://lab6-jeffreylwc.herokuapp.com/project/" + idNumber);
}

function callBackFunc(result) {
    $("#project" + result.id + " .details").append("<p>" + result.title + "</p");
    $("#project" + result.id + " .details").append("<p>" + result.date + "</p");
    $("#project" + result.id + " .details").append("<img class=\"detailsImage\", src=\"" + result.image + "\"></img>");
    $("#project" + result.id + " .details").append(result.summary);
}