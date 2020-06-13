var Example = require('../models/Example');

exports.create_example = function(req, res) {
    var new_example = new Example(req.body);
    
    Example.createExample(new_example, function(err, example) {
        if (err)
          res.send(err);
        res.json(example);
    });
};

exports.get_example_by_id = function(req, res) {
    Example.getExampleById(req.params.exampleId, function(err, example) {
        if (err)
          res.send(err);
        res.json(example);
    });
};

exports.get_all_examples = function(req, res) {
    Example.getAllExamples(function(err, examples) {
        if (err)
          res.send(err);
        res.json(examples);
    });
};