/*
 * This file is part of MythicDrops, licensed under the MIT License.
 *
 * Copyright (C) 2019 Richard Harrah
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package com.tealcube.minecraft.bukkit.mythicdrops.aura

import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.GemTriggerType
import com.tealcube.minecraft.bukkit.mythicdrops.api.socketing.cache.SocketGemCacheManager
import org.bukkit.Bukkit
import org.bukkit.entity.LivingEntity
import org.bukkit.scheduler.BukkitRunnable
import kotlin.math.max

class AuraRunnable(private val socketGemCacheManager: SocketGemCacheManager) : BukkitRunnable() {
    override fun run() {
        socketGemCacheManager.get().forEach { socketGemCache ->
            val player = Bukkit.getPlayer(socketGemCache.owner) ?: return@forEach
            val armorEffectCache = socketGemCache.getArmorSocketEffects(GemTriggerType.AURA)
            val mainHandEffectCache = socketGemCache.getMainHandSocketEffects(GemTriggerType.AURA)
            val offHandEffectCache = socketGemCache.getOffHandSocketEffects(GemTriggerType.AURA)
            val socketEffectsToApply = armorEffectCache + mainHandEffectCache + offHandEffectCache
            if (socketEffectsToApply.isEmpty()) {
                return@forEach
            }
            val largestRadius = socketEffectsToApply.fold(0) { acc, socketEffect -> max(acc, socketEffect.radius) }
            val anyAffectsTarget = socketEffectsToApply.any { it.affectsTarget }
            val nearbyEntities = if (anyAffectsTarget) {
                player.getNearbyEntities(largestRadius.toDouble(), largestRadius.toDouble(), largestRadius.toDouble())
                    .mapNotNull { it as? LivingEntity }
            } else {
                emptyList()
            }
            socketEffectsToApply.forEach { socketEffectToApply ->
                val radius = socketEffectToApply.radius * socketEffectToApply.radius
                if (socketEffectToApply.affectsWielder) {
                    socketEffectToApply.apply(player)
                }
                if (socketEffectToApply.affectsTarget) {
                    nearbyEntities.forEach { nearbyEntity ->
                        if (player.location.distanceSquared(nearbyEntity.location) <= radius) {
                            socketEffectToApply.apply(nearbyEntity)
                        }
                    }
                }
            }
        }
    }
}
