/*
 * This file is part of MythicDrops, licensed under the MIT License.
 *
 * Copyright (C) 2020 Richard Harrah
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
package io.pixeloutlaw.minecraft.spigot.mythicdrops

import com.tealcube.minecraft.bukkit.mythicdrops.safeRandom
import kotlin.math.max
import org.bukkit.Material

/**
 * Determines a randomized durability from a durability percentage range.
 *
 * @param minimumDurabilityPercentage minimum percentage
 * @param maximumDurabilityPercentage maximum percentage
 */
fun Material.getDurabilityInPercentageRange(
    minimumDurabilityPercentage: Double,
    maximumDurabilityPercentage: Double
): Int {
    val coercedMinimumDurabilityPercentage = minimumDurabilityPercentage.coerceAtLeast(0.0).coerceAtMost(1.0)
    val coercedMaximumDurabilityPercentage = maximumDurabilityPercentage.coerceAtLeast(0.0).coerceAtMost(1.0)

    val maximumDurability = this.maxDurability - (this.maxDurability * max(
        coercedMinimumDurabilityPercentage,
        coercedMaximumDurabilityPercentage
    )).toInt()
    val minimumDurability = this.maxDurability - (this.maxDurability * max(
        coercedMinimumDurabilityPercentage,
        coercedMaximumDurabilityPercentage
    )).toInt()

    return (minimumDurability..maximumDurability).safeRandom()
}