//package com.example.todoApp
//
//import org.hamcrest.CoreMatchers.equalTo
//import org.hamcrest.MatcherAssert.assertThat
//import org.junit.jupiter.api.Test
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.boot.restclient.RestTemplateBuilder
//import org.springframework.boot.test.context.SpringBootTest
//import org.springframework.boot.test.web.server.LocalServerPort
//import org.springframework.http.HttpStatus
//data class TodoRequest(val text: String)
//
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class TodoAppApplicationTests(
//    @Autowired val restTemplateBuilder: RestTemplateBuilder,
//    @LocalServerPort val port: Int
//) {
//    val restTemplate = restTemplateBuilder.build()
//
//
//    @Test
//    fun `GETリクエストはOKステータスを返す`() {
//        // localhost/todos に GETリクエストを発行する。
//        val response = restTemplate.getForEntity("http://localhost:$port/todos", String::class.java)
//        // レスポンスのステータスコードは OK である。
//        assertThat(response.statusCode, equalTo(HttpStatus.OK))
//    }
//
//@Test
//fun `POSTリクエストはOKステータスを返す`() {
//    // localhost/todos に POSTリクエストを送る。このときのボディは {"text": "hello"}
//    val request = TodoRequest("hello")
//    val response = restTemplate.postForEntity("http://localhost:$port/todos", request, String::class.java)
//    // レスポンスのステータスコードは OK であること。
//    assertThat(response.statusCode, equalTo(HttpStatus.OK))
//}
//@Test
//fun `GETリクエストは空のTdoリストを返す`() {
//    val response = restTemplate.getForEntity("http://localhost:$port/todos", Array<TodoEntity>::class.java)
//    val todos = response.body!!
//    assertThat(todos.size,equalTo(0))
//}}






