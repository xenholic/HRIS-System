const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    salary: {
        type: Number,
    },
    position: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    pointOfHireArea: {
        type: String,
    },
    contractType: {
        type: String,
    },
    lastSalary: {
        type: String,
    },
    status: {
        type: String,
    },
    companyId: {
        type: String,
    },
    department: {
        type: String,
    },
    field: {
        type: String,
    },
    religion: {
        type: String,
    },
    startDateWorking: {
        type: Date,
        required: true,
    },
    personalData: {
        dateOfBirth: {
            type: String,
        },
        placeOfBirth: {
            type: String,
        },
        gender: {
            type: String,
        },
        educationData: {
            educationLevel: {
                type: String,
            },
            yearOfGraduation: {
                type: String,
            },
            major: {
                type: String,
            },
            university: {
                type: String,
            },
            organizationExperience: {
                type: String,
            },
        },
        familyData: {
            mariageStatus: {
                type: String,
            },
            spouseName: {
                type: String,
            },
            motherName: {
                type: String,
            },
            fatherName: {
                type: String,
            },
            numberOfChildren: {
                childName1: {
                    type: String,
                },
                childName2: {
                    type: String,
                },
                childName3: {
                    type: String,
                },
                childName4: {
                    type: String,
                },
            },
        },
        phoneNumber: {
            type: String,
        },
        nikNumber: {
            type: String,
        },
        bpjsKesehatan: {
            type: String,
        },
        bpjsKetenagakerjaan: {
            type: String,
        },
        npwpNumber: {
            type: String,
        },
        experience: {
            type: String,
        },
        lastDepartment: {
            type: String,
        },
        personalCharacteristics: {
            weakness: {
                type: String,
            },
            strength: {
                type: String,
            },
        },
        emergencyContact: {
            name: {
                type: String,
            },
            address: {
                type: String,
            },
            phoneNumber: {
                type: String,
            },
            relationship: {
                type: String,
            },
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;