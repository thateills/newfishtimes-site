 /*
// Run the checkHeader function every time you scroll
window.addEventListener('scroll', checkHeader);
// This function will run a throttled script every 300 ms
var checkHeader = _.throttle(() => { 
    // Run JavaScript stuff here
}, 300);



// Detect scroll position
let scrollPosition = Math.round(window.scrollY);

// If we've scrolled 100px, add "sticky" class to the header
if (scrollPosition > 100){
    document.querySelector('header').classList.add('sticky');
}
// If not, remove "sticky" class from header
else {
    document.querySelector('header').classList.remove('sticky');
}
*/
// grab an element
//var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
//var headroom  = new Headroom(myElement);
// initialise
//headroom.init(); 



// Loads page content for Kingfisher.Times

window.onload = function() {
 //Set date element
  var date_text = callTheDate();
  var header_date = document.getElementsByClassName("header_grid_date");
  header_date[0].innerHTML = date_text;

// Load page content
  //var contentElement = document.getElementById("update_content");
  contentText = loadContent();
  //contentElement.innerHTML = contentText;

  //idea = loadHeadlines();
  makeHTMLList_CNN();
  makeHTMLList_FOX();
  makeHTMLList_NBC();
  makeHTMLList_MSNBC();
};

// Return a string with the date (for the header)
function callTheDate() {
 var months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }
  var days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  }
  var dt = new Date();
  var wkday = days[dt.getDay()];
  var mnth = months[dt.getMonth()];  
  var dtday = dt.getDate();
  var yr = dt.getFullYear();

  var date_text = (wkday+", "+mnth+" "+dtday+", "+yr);

  return date_text;
};

function loadContent() {
  var contentText = "content WEnt RGIHT here!";
  var i
  for (i=0; i<10; i++) {
  	contentText += contentText;
  };
  //var contentElement = document.getElementById("update_content");
  //contentElement.innerHTML = contentText;
  return 0;
};

function makeHTMLList_CNN() {
  var listDiv = document.getElementById('news_CNN');
  var cnnHeadlines = getHeadlines('cnn');
  var headLines = cnnHeadlines['headlines'];
  var ul=document.createElement('ul');
  // Main header add
  var li=document.createElement('li');
  var a=document.createElement('a');
  a.innerHTML = cnnHeadlines['main']['headline'];   // Set text to headline
  a.href = cnnHeadlines['main']['link'];   // Set link to link
  li.appendChild(a); 
  ul.appendChild(li);   

  // Other Header Add
  for (var i = 0; i < headLines.length; ++i) {
      var li=document.createElement('li');
      var a=document.createElement('a');
      a.innerHTML = headLines[i]['headline'];   // Set text to headline
      a.href = headLines[i]['link'];   // Set link to link
      li.appendChild(a); 
      ul.appendChild(li);                                 
  };
  listDiv.appendChild(ul);    // Note here
}

function makeHTMLList_FOX() {
  var listDiv = document.getElementById('news_FOX');
  var cnnHeadlines = getHeadlines('fox');
  var headLines = cnnHeadlines['headlines'];
  var ul=document.createElement('ul');
  // Main header add
  var li=document.createElement('li');
  var a=document.createElement('a');
  a.innerHTML = cnnHeadlines['main']['headline'];   // Set text to headline
  a.href = cnnHeadlines['main']['link'];   // Set link to link
  li.appendChild(a); 
  ul.appendChild(li);   

  // Other Header Add
  for (var i = 0; i < headLines.length; ++i) {
      var li=document.createElement('li');
      var a=document.createElement('a');
      a.innerHTML = headLines[i]['headline'];   // Set text to headline
      a.href = headLines[i]['link'];   // Set link to link
      li.appendChild(a); 
      ul.appendChild(li);                                 
  };
  listDiv.appendChild(ul);    // Note here
}

function makeHTMLList_NBC() {
  var listDiv = document.getElementById('news_NBC');
  var cnnHeadlines = getHeadlines('nbc');
  var headLines = cnnHeadlines['headlines'];
  var ul=document.createElement('ul');
  // Main header add
  var li=document.createElement('li');
  var a=document.createElement('a');
  a.innerHTML = cnnHeadlines['main']['headline'];   // Set text to headline
  a.href = cnnHeadlines['main']['link'];   // Set link to link
  li.appendChild(a); 
  ul.appendChild(li);   

  // Other Header Add
  for (var i = 0; i < headLines.length; ++i) {
      var li=document.createElement('li');
      var a=document.createElement('a');
      a.innerHTML = headLines[i]['headline'];   // Set text to headline
      a.href = headLines[i]['link'];   // Set link to link
      li.appendChild(a); 
      ul.appendChild(li);                                 
  };
  listDiv.appendChild(ul);    // Note here
}

function makeHTMLList_MSNBC() {
  var listDiv = document.getElementById('news_MSNBC');
  var cnnHeadlines = getHeadlines('msnbc');
  var headLines = cnnHeadlines['headlines'];
  var ul=document.createElement('ul');
  // Main header add
  var li=document.createElement('li');
  var a=document.createElement('a');
  a.innerHTML = cnnHeadlines['main']['headline'];   // Set text to headline
  a.href = cnnHeadlines['main']['link'];   // Set link to link
  li.appendChild(a); 
  ul.appendChild(li);   

  // Other Header Add
  for (var i = 0; i < headLines.length; ++i) {
      var li=document.createElement('li');
      var a=document.createElement('a');
      a.innerHTML = headLines[i]['headline'];   // Set text to headline
      a.href = headLines[i]['link'];   // Set link to link
      li.appendChild(a); 
      ul.appendChild(li);                                 
  };
  listDiv.appendChild(ul);    // Note here
}


function loadHeadlines() {
  var cnnHeadlines = getHeadlines('cnn');
  var headLine = cnnHeadlines['main']['headlines'];
  console.log(headLine);
  var contentElement = document.getElementById("newsbox_CNN");
  contentElement.innerHTML = headLine;

  /*
  var li_Tag = document.createElement("li");
  var a_Tag = document.createElement("a");
  var HLText = document.createTextNode(headLine);
  //class = 'newsbox'
  a_Tag.innerHTML = HLText;
  a_Tag.appendChild(HLText);
  */
  
  var foxHeadlines = getHeadlines('fox');
  //console.log(foxHeadlines);


  var nbcHeadlines = getHeadlines('nbc');
  //console.log(nbcHeadlines);


  var msnbcHeadlines = getHeadlines('msnbc');
  //console.log(msnbcHeadlines);
}

/*
function getHeadlines(site) {
  console.log(site);
  var res = { 
    'headlines': [   {   'headline': 'Something is rotten in Denmark',
                         'link': 'https://www.cnn.com/2019/08/25/opinions/call-him-king-trump-opinion-weekly-column-carr/index.html'},
                     {   'headline': 'Dow futures slide Sunday night amid swirl of confusing signals on trade',
                         'link': 'https://www.cnn.com/2019/08/25/intl_business/asian-market-latest/index.html'},
                     {   'headline': 'Giant pumice stone in the Pacific could help heal Great Barrier Reef',
                         'link': 'https://www.cnn.com/2019/08/25/asia/pumice-stone-underwater-volcano-great-barrier-reef-intl/index.html'}
                         ],
    'main': {   'headline': "Macron's surprise G7 invite sparks confusion",
                'link': '/2019/08/25/politics/g7-iran-zarif-france-intl/index.html',
                'sub': 'An unexpected arrival at the summit made it appear as if the French president had pulled off an end run around his most powerful guest, President Trump'},
    'site': 'CNN',
    'title': 'CNN - Breaking News, Latest News and Videos',
    'url': 'https://www.cnn.com'};
  return res;
}
*/


function getHeadlines(site) {
  var res;
  switch(site) {
    case 'cnn':
      res = {   
    'headlines': [   {   'headline': 'Something is rotten in Denmark',
                         'link': 'https://www.cnn.com/2019/08/25/opinions/call-him-king-trump-opinion-weekly-column-carr/index.html'},
                     {   'headline': 'Dow futures slide Sunday night amid swirl of confusing signals on trade',
                         'link': 'https://www.cnn.com/2019/08/25/intl_business/asian-market-latest/index.html'},
                     {   'headline': 'Giant pumice stone in the Pacific could help heal Great Barrier Reef',
                         'link': 'https://www.cnn.com/2019/08/25/asia/pumice-stone-underwater-volcano-great-barrier-reef-intl/index.html'}],
    'main': {   'headline': "Macron's surprise G7 invite sparks confusion",
                'link': '/2019/08/25/politics/g7-iran-zarif-france-intl/index.html',
                'sub': 'An unexpected arrival at the summit made it appear as if the French president had pulled off an end run around his most powerful guest, President Trump'
              },
    'site': 'CNN',
    'title': 'CNN - Breaking News, Latest News and Videos',
    'url': 'https://www.cnn.com'};
      return res;
      break;
    case 'fox':
      res = {   
    'headlines': [   {   'headline': "TONY PERKINS: Solution to gun violence isn't what you think, says former cop",
                         'link': 'https://www.foxnews.com/opinion/tony-perkins-solution-gun-violence-not-what-you-think-former-police-officer'},
                     {   'headline': 'Former NFL fullback makes desperate plea over head trauma',
                         'link': 'https://www.foxnews.com/sports/nfl-fullback-leron-mcclain-head-trauma-pleads-help-me'},
                     {   'headline': "Network takes heat as guest says Trump may be linked to 'millions' of deaths",
                         'link': 'https://www.foxnews.com/media/duke-professor-compares-destructive-trump-to-hitler-stalin-and-mao-during-cnn-interview'},
                     {   'headline': "Parents accused of assaulting teen found in daughter's bedroom: report",
                         'link': 'https://www.foxnews.com/us/california-parents-kidnapping-assaulting-teen-daughters-bedroom-apparent-hate-crime'}],
    'main': {   'headline': "Sanders slams McConnell's 'cowardice' in fiery visit to top Republican's home state",
                'link': 'https://www.foxnews.com/politics/sanders-slams-mcconnell-cowardice-as-ky-governor-laments-arrival-of-crazy-socialist',
                'sub': null},
    'site': 'FOX',
    'title': 'Fox News - Breaking News Updates | Latest News Headlines | Photos & News Videos',
    'url': 'https://www.foxnews.com'};
      return res;
      break;
    case 'nbc': 
      res = {   
    'headlines': [   {   'headline': 'Johnson & Johnson must pay $572 million for Oklahoma opioid crisis, judge rules',
                         'link': 'https://www.nbcnews.com/news/us-news/johnson-johnson-must-pay-over-572-million-its-role-oklahoma-n1046476'},
                     {   'headline': "Luck's retirement is a message for NFL fans to stop treating players like gladiators",
                         'link': 'https://www.nbcnews.com/think/opinion/qb-andrew-luck-s-retirement-message-nfl-fans-stop-treating-ncna1046426'},
                     {   'headline': 'The lost children: Why 1 million uncounted kids on census matters',
                         'link': 'https://www.nbcnews.com/politics/politics-news/lost-children-advocates-fear-census-will-undercount-kids-n1041481'},
                     {   'headline': 'Kentucky clerk who refused gay marriage licenses can be sued',
                         'link': 'https://www.nbcnews.com/feature/nbc-out/kentucky-clerk-who-refused-gay-marriage-licenses-can-be-sued-n1046306'}
                  ],
    'main': {   'headline': 'World leaders may have found a way to handle Trump',
                'link': 'https://www.nbcnews.com/politics/white-house/world-leaders-may-have-have-found-way-handle-trump-n1046466',
                'sub': null},
    'site': 'NBC',
    'title': 'NBC News - Breaking News & Top Stories - Latest World, US & Local News | NBC News',
    'url': 'https://www.nbcnews.com'};
      return res;
      break;
    case 'msnbc':
      res = {   
      'headlines': [   {   'headline': 'Warren, Sanders and Biden in a three-way tie in new poll',
                         'link': 'https://www.msnbc.com/mtp-daily/watch/warren-sanders-and-biden-in-a-three-way-tie-in-new-poll-67488325574'},
                     {   'headline': 'How Dayton, Ohio has dealt with the opioid epidemic',
                         'link': 'https://www.msnbc.com/hardball/watch/how-dayton-ohio-has-dealt-with-the-opioid-epidemic-62133829920'},
                     {   'headline': 'Sherrod Brown: Trump is a terrible President who has betrayed workers',
                         'link': 'https://www.msnbc.com/hardball/watch/sherrod-brown-trump-is-a-terrible-president-who-has-betrayed-workers-62133829793'},
                     {   'headline': '‘Wow, that’s about 10 hands:’ Have Dayton voters benefited from Trump tax cuts?',
                         'link': 'https://www.msnbc.com/hardball/watch/-wow-that-s-about-10-hands-have-dayton-voters-benefited-from-trump-tax-cuts-62135365510'}],
    'main': {   'headline': 'Watch: Trump tries to justify holding next G-7 at his own country club ',
                'link': 'https://www.msnbc.com/msnbc/watch/trump-shares-his-justification-for-holding-next-g7-at-trump-national-doral-miami-67460677657',
                'sub': null},
    'site': 'MSNBC',
    'title': 'MSNBC — Breaking News, Top Stories, & Show Clips | NBC News',
    'url': 'https://www.msnbc.com'};
      return res;
      break;
    default:
      res = {
    'headlines': [   {'headline': 'headline 1', 'link': 'link 1'},
                     {'headline': 'headline 2', 'link': 'link 2'},
                     {'headline': 'headline 3', 'link': 'link 3'},
                     {'headline': 'headline 4', 'link': 'link 4'}],
    'main': {   'headline': 'main headline',
                'link': 'main headline link',
                'sub': 'sub main headline'},
    'site': 'media site default',
    'title': 'media site title',
    'url': 'media site url'};
      return res;
  };
};

