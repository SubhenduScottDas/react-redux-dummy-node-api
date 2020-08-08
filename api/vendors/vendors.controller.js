"use strict";

const vendorDetails = require("../vendors/vendors.model");

module.exports = {
  index: (req, res) => {
    console.log(vendorDetails);
    res.status(200).json({
      message: "Vendor Details fetched Successfully",
      data: vendorDetails,
    });
  },
  retrieve: (req, res) => {
    const vendorId = req.params.id;
    const vendor = vendorDetails.find((c) => c.id == parseInt(vendorId));
    if (!vendor) return res.status(404).send("Vendor with given ID not found");
    res.status(200).json({
      message: "Vendor Details fetched Successfully",
      data: vendor,
    });
  },
  create: (req, res) => {
    const vendor = {
      id: vendorDetails.length + 1,
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone_number,
      mobile: req.body.mobile,
      is_active: true,
    };

    vendorDetails.push(vendor);
    res.status(200).json({
      message: "Vendor Created Successfully",
      data: vendorDetails,
    });
  },
  update: (req, res) => {
    const vendorId = req.params.id;
    const vendor = vendorDetails.find((c) => c.id == parseInt(vendorId));
    if (!vendor) return res.status(404).send("Vendor with given ID not found");

    vendor.name = req.body.name;
    vendor.address = req.body.address;
    vendor.phone_number = req.body.phone_number;
    vendor.mobile = req.body.mobile;
    res.status(200).json({
      message: "Vendor Updated",
      data: vendorDetails,
    });
  },
  delete: (req, res) => {
    const vendorId = req.params.id;
    const vendor = vendorDetails.find((c) => c.id == parseInt(vendorId));
    if (!vendor) return res.status(404).send("Vendor with given ID not found");
    const index = vendorDetails.indexOf(vendor);
    vendorDetails.splice(index, 1);

    res.status(200).json({
      message: "Vendor Deleted",
      data: vendorDetails,
    });
  },
};
