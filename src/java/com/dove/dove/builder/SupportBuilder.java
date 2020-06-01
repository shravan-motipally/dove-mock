package com.dove.dove.builder;

import com.dove.dove.vo.Support;
import org.hibernate.id.GUIDGenerator;

import java.util.UUID;

public class SupportBuilder {

    private String id;
    private String name;
    private String email;

    public SupportBuilder() {
        this.id = UUID.randomUUID().toString();
        this.name = null;
        this.email = null;
    }

    public SupportBuilder withName(String name) {
        this.name = name;
        return this;
    }

    public SupportBuilder withEmail(String email) {
        this.email = email;
        return this;
    }

    public Support build() {
        return new Support(id, name, email);
    }
}
