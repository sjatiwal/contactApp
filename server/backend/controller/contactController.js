const catchAsyncError = require("../middleware/catchAsyncError");
const Contact = require("../models/contactModel");

// Add New Contact
exports.newContact = catchAsyncError(async (req, res, next) => {
  try {
    const { firstName, lastName, status } = req.body;

    const contact = await Contact.create({
      firstName,
      lastName,
      status,
    });
    res.status(201).json({ success: true, contact });
  } catch (err) {
    return next(err);
  }
});

// Get All Contact
exports.getAllContacts = catchAsyncError(async (req, res, next) => {
  try {
    const contact = await Contact.find();
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (err) {
    next(err);
  }
});
// Get Contact Details
exports.getContactDetail = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  res.status(200).json({
    success: true,
    contact,
  });
});

// Update Contact
exports.updateContact = catchAsyncError(async (req, res, next) => {
  try {
    let contact = await Contact.findById(req.params.id);

    const { firstName, lastName, status } = req.body;

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        status,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({ success: true, contact });
  } catch (err) {
    next(err);
  }
});

// Delete Contact
exports.deleteContact = catchAsyncError(async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndRemove(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee Data Deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
});
