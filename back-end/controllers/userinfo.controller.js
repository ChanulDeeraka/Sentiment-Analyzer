import User from "../models/userinfo.model.js";

export async function addNewUser(req, res) {
    try {
        const {
            userName,
            userAdress,
            userCity,
            userCountry,
            userOcupation,
            userEmail,
            userPhone,
            userAge,
            userGender,
            userUsername,
            userPassword
        } = req.body;

    // validate input data
    if (
        !userName ||
        !userAdress ||
        !userCity ||
        !userCountry ||
        !userOcupation ||
        !userEmail ||
        !userPhone ||
        !userAge ||
        !userGender ||
        !userUsername ||
        !userPassword
    ) {        
        return res.status(400).json({ message: "Invalid input data" });        
        }
        
        const currentDateAndTime = new Date();

        // Get individual components of the date and time
        const year = currentDateAndTime.getFullYear();
        const month = currentDateAndTime.getMonth() + 1; // Months are zero-based, so add 1
        const day = currentDateAndTime.getDate();
        const hours = currentDateAndTime.getHours();
        const minutes = currentDateAndTime.getMinutes();
        const seconds = currentDateAndTime.getSeconds();

        // Format the date and time
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        const newUser = new User({
            userName: userName,
            userAdress: userAdress,
            userCity: userCity,
            userCountry: userCountry,
            userOcupation: userOcupation,
            userEmail: userEmail,
            userPhone: userPhone,
            userAge: userAge,
            userGender: userGender,
            userUsername: userUsername,
            userPassword: userPassword,
            userCreatedDate: formattedDateTime,
            userEditedDate: formattedDateTime,
            userStatus: true
        });

        const saveNewUser = await newUser.save();
        
        res.status(201).json(saveduser);


    } catch {
        // handle errors
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getUserById(req, res, next) {
  try {
    const userId = req.params.id;

    // validate input data
    if (!userId) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    // sanitize input data
    const sanitizedUserId = userId.trim();

    // retrieve user from database
    const existingUser = await User.findById(sanitizedUserId);

    if (existingUser) {
      // send user data
      res.json(existingUser);
    } else {
      // user not found
      const error = new Error("User not found");
      res.status(404);
      next(error);
    }
  } catch (error) {
    // handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateUser(req, res) {
  try {
    const userId = req.params.id;

    // validate input data
    if (!userId) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    // sanitize input data
    const data = {
      HID: req.body.HID,
      DID: req.body.DID,
      POID: req.body.POID,
      PID: req.body.PID,
      TypeReason: req.body.TypeReason,
      Date: req.body.Date,
      Time: req.body.Time,
      Fee: req.body.Fee,
      RoomNo: req.body.RoomNo,
      Status: req.body.Status,
      Note: req.body.Note,
      File: req.body.File,
    };

    // update appointment in database
    const updatedUser = await Appointment.findByIdAndUpdate(
      userId,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    if (updatedUser) {
      // send updated appointment data
      res.json(updatedUser);
    } else {
      // appointment not found
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
  //res.status(200).json(movie);
    res.status(200).json(users);
  } catch (err) {
    res.json({ message: err });
  }
}

export async function deleteUserById(req, res) {
  try {
    const deletedUser = await User.findById(req.params.id);

    if (deletedUser) {
      await deletedUser.remove();
      res.json({ message: "User removed" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}