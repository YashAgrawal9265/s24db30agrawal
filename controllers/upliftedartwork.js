var Upliftedartwork = require("../models/upliftedartwork");
// List of all upliftedartwork
exports.upliftedartwork_list = async function (req, res) {
  try {
    theUpliftedartworks = await Upliftedartwork.find();
    res.send(theUpliftedartworks);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// VIEWS
// Handle a show all view
exports.upliftedartwork_view_all_Page = async function (req, res) {
  try {
    theUpliftedartworks = await Upliftedartwork.find();
    res.render("upliftedartwork", {
      title: "Upliftedartwork Search Results",
      results: theUpliftedartworks,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific upliftedartwork.
exports.upliftedartwork_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Upliftedartwork.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle upliftedartwork create on POST.
exports.upliftedartwork_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Upliftedartwork();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"material":"Pastels", "style":"Expressionism", "price":120}

  document.material = req.body.material;
  document.style = req.body.style;
  document.price = req.body.price;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle upliftedartwork delete from on DELETE.
exports.upliftedartwork_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: upliftedartwork delete DELETE " + req.params.id);
};

// Handle upliftedartwork update form on PUT.
exports.upliftedartwork_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Upliftedartwork.findById(req.params.id);
    // Do updates of properties
    if (req.body.material) toUpdate.material = req.body.material;
    if (req.body.style) toUpdate.style = req.body.style;
    if (req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
  }
};
