package com.dove.dove.component;

import com.dove.dove.builder.SupportBuilder;
import com.dove.dove.vo.Support;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

@Service
public class SupportService {

    private final RestTemplate restTemplate;

    @Autowired
    public SupportService(@Qualifier("restTemplate") RestTemplate restTemplate) {
       this.restTemplate = restTemplate;
    }

    @GetMapping("/v1/support")
    public ResponseEntity<Support> getSupport(@Param("name") String name,
                                              @Param("email") String email) {
        return ResponseEntity.ok(new SupportBuilder()
                .withName(name)
                .withEmail(email)
                .build());
    }
}
