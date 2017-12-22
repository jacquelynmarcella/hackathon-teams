var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);
  res.redirect('/teams');
});

router.delete('/:name', function(req, res){
	teamService.deleteTeam(req.params.name);
	res.send('We done did a delete');
});

router.put('/:name', function(req, res){
	teamService.editTeam(req.params.name);
	console.log('Team edited');
	res.send('We are editing the team');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);
  res.render('teams/show', { team: team });
});

module.exports = router;
