package com.mypack.geofence;

import com.mypack.geofence.model.User;
import com.mypack.geofence.model.Geofence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;

@Service
public class DatabaseService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveUserLocation(User user) {
        // Using CURRENT_TIMESTAMP (works in Server)
        String sql = "INSERT INTO users (name, email, latitude, longitude, last_updated) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)";
        jdbcTemplate.update(sql, user.getName(), user.getEmail(), user.getLatitude(), user.getLongitude());
    }

    public Geofence getGeofence() {
        // Compatible query for MySQL/PostgreSQL (LIMIT 1)
        String sql = "SELECT * FROM geofence";
        return jdbcTemplate.queryForObject(sql, (ResultSet rs, int rowNum) -> {
            Geofence g = new Geofence();
            g.setId(rs.getInt("id"));
            g.setName(rs.getString("name"));
            g.setCenterLatitude(rs.getDouble("center_latitude"));
            g.setCenterLongitude(rs.getDouble("center_longitude"));
            g.setRadiusMeters(rs.getDouble("radius_meters"));
            return g;
        });
    }

    public boolean isUserInsideFence(User user) {
        Geofence g = getGeofence();
        double distance = haversine(
                user.getLatitude(),
                user.getLongitude(),
                g.getCenterLatitude(),
                g.getCenterLongitude()
        );
        return distance <= g.getRadiusMeters();
    }

    // Haversine distance formula (in meters)
    private double haversine(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371000; // Earth's radius in meters
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1))
                * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }
}
