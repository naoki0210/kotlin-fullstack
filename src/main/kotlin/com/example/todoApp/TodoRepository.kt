package com.example.todoApp
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Repository
interface DrinkRepository : JpaRepository<DrinkLog, Long> {
    fun findByDrunkAtBetween(start: LocalDateTime, end: LocalDateTime): List<DrinkLog>
//    @Query("""
//        select dl from DrinkLog dl where dl.drunkAt between :start and :end
//    """, // NOT SQL, JPQL
//    )
//    fun findByLogForToday(start: LocalDateTime, end: LocalDateTime): List<DrinkLog>
}