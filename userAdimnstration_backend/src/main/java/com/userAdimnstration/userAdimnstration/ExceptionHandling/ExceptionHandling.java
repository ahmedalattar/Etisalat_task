package com.userAdimnstration.userAdimnstration.ExceptionHandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.UnexpectedTypeException;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ExceptionHandling {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(UnexpectedTypeException.class)
    public ResponseEntity<Map<String, Object>> handleError(UnexpectedTypeException ex) {
        Map<String, Object> response = new HashMap<>();
        ex.printStackTrace();
        response.put("status", false);
        response.put("code", HttpStatus.BAD_REQUEST.value());
        response.put("message", ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }


    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleError(MethodArgumentNotValidException ex) {
        Map<String, Object> response = new HashMap<>();
        ex.printStackTrace();
        response.put("status", false);
        response.put("code", HttpStatus.BAD_REQUEST.value());
        response.put("message", ex.getBindingResult().getAllErrors().get(0).getDefaultMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

}
