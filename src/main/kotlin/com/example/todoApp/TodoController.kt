package com.example.todoApp

import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.query.JpqlQueryBuilder.entity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime


@RequestMapping("/api/drinks")
@RestController
class DrinkController(
    @Autowired private val repository: DrinkRepository
) {
    @PostMapping
    fun postDrink(@RequestBody request: DrinkRequest): DrinkLog {
        val entity = DrinkLog(

            drinkName = request.drinkName,
            volume = request.volume,
            count = request.count,
            percent = request.percent,
            alcohol = request.alcohol,
            drunkAt = LocalDateTime.now(),


            )
        return repository.save(entity)
    }

    @GetMapping
    fun getTodos(): List<DrinkLog> {
        val todos = repository.findAll()
        return todos.toList()
    }

//    @PutMapping("/{id}")
//    fun putDrink(@PathVariable id: Long, @RequestBody request: DrinkRequest): DrinkLog {
//        val entity = repository.findById(id).orElseThrow { RuntimeException("Entity not found") }
//        entity.drinkName = request.drinkName
//        entity.volume = request.volume
//        entity.count = request.count
//        entity.percent = request.percent
//        entity.alcohol = request.alcohol
//        entity.drunkAt = LocalDateTime.now()
//
//        return repository.save(entity)
//    }



    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long) {
        val del = repository.deleteById(id)

    }
}

////////////////////////////////////////
@RequestMapping("/api/log")
@RestController
class GetDrinkController(private val drinkRepository: DrinkRepository) {

    @GetMapping("/today")
    fun getTodayLogs(): List<DrinkLog> {
        val today: LocalDate = LocalDate.now()
        val from: LocalDateTime = today.atTime(LocalTime.MIN)
        val to: LocalDateTime = today.atTime(LocalTime.MAX)
        return drinkRepository.findByDrunkAtBetween(from, to)
    }
    @GetMapping("/week")
    fun getWeekLogs(): List<DrinkLog> {
        val today: LocalDate = LocalDate.now()
        val from: LocalDateTime = today.minusDays(6).atTime(LocalTime.MIN)
        val to : LocalDateTime = today.atTime(LocalTime.MAX)
        return drinkRepository.findByDrunkAtBetween(from, to)
    }
}








