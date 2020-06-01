package com.dove.dove.vo;

public class Support {
    private final String id;
    private final String name;
    private final String email;

    public Support(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }
}
