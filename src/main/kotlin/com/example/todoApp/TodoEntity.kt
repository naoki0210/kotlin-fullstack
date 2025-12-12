package com.example.todoApp

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import java.time.LocalDateTime

@Entity
class DrinkLog(
    @Id
    @GeneratedValue
    var id: Long? = null,
    var drinkName: String = "",
    var volume: Int = 0,
    var count: Int? = 0,
    var percent: Double = 0.0,
    var alcohol: Double = 0.0,
    var drunkAt: LocalDateTime = LocalDateTime.now(),

)
