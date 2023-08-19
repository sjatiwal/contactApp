const express = require("express");
const router = express.Router();

const {
  newContact,
  getContactDetail,
  updateContact,
  deleteContact,
  getAllContacts,
} = require("../controller/contactController");

router.route("/contact/save").post(newContact);
router.route("/contact/all").get(getAllContacts);
router.route("/contact/:id").get(getContactDetail);
router.route("/contact/update/:id").put(updateContact);
router.route("/contact/delete/:id").delete(deleteContact);

module.exports = router;
