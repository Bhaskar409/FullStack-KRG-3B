package com.mypack.geofence;

import com.mypack.geofence.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DatabaseController {

    @Autowired
    private DatabaseService databaseService;

    @PostMapping("/send-location")
    public String receiveUserLocation(@RequestBody User user) {
        boolean inside = databaseService.isUserInsideFence(user);
        databaseService.saveUserLocation(user);
        return inside ? "User is INSIDE the geofence" : "User is OUTSIDE the geofence";
    }
}
