export const problems = {
    two_sum: {
        title: "Two Sum",
        difficulty: "easy",
        category: "Array Manipulation",
        description: `
            <h3>Deskripsi Soal</h3>
            <p>Diberikan sebuah array integer <code>nums</code> dan sebuah integer <code>target</code>, kembalikan indeks dari dua angka sehingga jika dijumlahkan hasilnya sama dengan <code>target</code>.</p>
            <p>Anda dapat mengasumsikan bahwa setiap input hanya memiliki satu solusi, dan Anda tidak boleh menggunakan elemen yang sama dua kali.</p>
            <p>Urutan jawaban tidak masalah.</p>
            
            <h3>Contoh</h3>
            <p><strong>Contoh 1:</strong></p>
            <p>Input: <code>nums = [2,7,11,15], target = 9</code></p>
            <p>Output: <code>[0,1]</code></p>
            <p>Penjelasan: <code>nums[0] + nums[1] = 2 + 7 = 9</code></p>
            
            <p><strong>Contoh 2:</strong></p>
            <p>Input: <code>nums = [3,2,4], target = 6</code></p>
            <p>Output: <code>[1,2]</code></p>
            
            <p><strong>Contoh 3:</strong></p>
            <p>Input: <code>nums = [3,3], target = 6</code></p>
            <p>Output: <code>[0,1]</code></p>
            
            <h3>Constraints</h3>
            <ul>
                <li>2 <= nums.length <= 10^4</li>
                <li>-10^9 <= nums[i] <= 10^9</li>
                <li>-10^9 <= target <= 10^9</li>
                <li>Hanya ada satu jawaban yang benar</li>
            </ul>
        `,
        template: `/**
 * Temukan dua indeks dari array nums sehingga jumlahnya sama dengan target.
 * @param {number[]} nums - Array integer
 * @param {number} target - Target jumlah
 * @return {number[]} - Indeks dari dua angka
 */
function twoSum(nums, target) {
    // TODO: Tulis kode kamu di sini
    
}

// Test cases akan dijalankan otomatis
`,
        testCases: [
            { nums: [2,7,11,15], target: 9, expected: [0,1] },
            { nums: [3,2,4], target: 6, expected: [1,2] },
            { nums: [3,3], target: 6, expected: [0,1] },
            { nums: [1,5,8,10,13], target: 18, expected: [2,4] }
        ],
        testFunction: (userFunction, testCase) => {
            try {
                const result = userFunction(testCase.nums, testCase.target);
                if (!result || !Array.isArray(result) || result.length !== 2) {
                    return { pass: false, message: `Output harus berupa array dengan 2 elemen, got: ${result}` };
                }
                
                const [i, j] = result;
                if (i === j) {
                    return { pass: false, message: "Tidak boleh menggunakan elemen yang sama dua kali" };
                }
                
                if (i < 0 || i >= testCase.nums.length || j < 0 || j >= testCase.nums.length) {
                    return { pass: false, message: "Indeks di luar batas array" };
                }
                
                if (testCase.nums[i] + testCase.nums[j] === testCase.target) {
                    return { pass: true, message: `Berhasil! ${testCase.nums[i]} + ${testCase.nums[j]} = ${testCase.target}` };
                } else {
                    return { pass: false, message: `${testCase.nums[i]} + ${testCase.nums[j]} = ${testCase.nums[i] + testCase.nums[j]}, bukan ${testCase.target}` };
                }
            } catch (error) {
                return { pass: false, message: `Error: ${error.message}` };
            }
        }
    },
    
    maximum_subarray: {
        title: "Maximum Subarray",
        difficulty: "easy",
        category: "Array Manipulation",
        description: `
            <h3>Deskripsi Soal</h3>
            <p>Diberikan sebuah array integer <code>nums</code>, cari subarray dengan jumlah terbesar dan kembalikan jumlahnya.</p>
            <p>Subarray adalah bagian berurutan dari array.</p>
            
            <h3>Contoh</h3>
            <p><strong>Contoh 1:</strong></p>
            <p>Input: <code>nums = [-2,1,-3,4,-1,2,1,-5,4]</code></p>
            <p>Output: <code>6</code></p>
            <p>Penjelasan: Subarray [4,-1,2,1] memiliki jumlah terbesar = 6.</p>
            
            <p><strong>Contoh 2:</strong></p>
            <p>Input: <code>nums = [1]</code></p>
            <p>Output: <code>1</code></p>
            
            <p><strong>Contoh 3:</strong></p>
            <p>Input: <code>nums = [5,4,-1,7,8]</code></p>
            <p>Output: <code>23</code></p>
            
            <h3>Constraints</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
                <li>-10^4 <= nums[i] <= 10^4</li>
            </ul>
        `,
        template: `/**
 * Cari subarray dengan jumlah terbesar.
 * @param {number[]} nums - Array integer
 * @return {number} - Jumlah subarray terbesar
 */
function maxSubArray(nums) {
    // TODO: Tulis kode kamu di sini
    
}

// Test cases akan dijalankan otomatis
`,
        testCases: [
            { nums: [-2,1,-3,4,-1,2,1,-5,4], expected: 6 },
            { nums: [1], expected: 1 },
            { nums: [5,4,-1,7,8], expected: 23 },
            { nums: [-1,-2,-3,-4], expected: -1 }
        ],
        testFunction: (userFunction, testCase) => {
            try {
                const result = userFunction(testCase.nums);
                if (typeof result !== 'number') {
                    return { pass: false, message: `Output harus berupa number, got: ${typeof result}` };
                }
                
                if (result === testCase.expected) {
                    return { pass: true, message: `Berhasil! Jumlah subarray terbesar adalah ${result}` };
                } else {
                    return { pass: false, message: `Expected ${testCase.expected}, got ${result}` };
                }
            } catch (error) {
                return { pass: false, message: `Error: ${error.message}` };
            }
        }
    },
    
    valid_palindrome: {
        title: "Valid Palindrome",
        difficulty: "easy",
        category: "String Processing",
        description: `
            <h3>Deskripsi Soal</h3>
            <p>Diberikan sebuah string <code>s</code>, kembalikan <code>true</code> jika string tersebut adalah palindrome setelah menghapus semua karakter non-alphanumeric dan mengubah semua huruf menjadi lowercase.</p>
            <p>Palindrome adalah string yang dibaca sama dari depan dan belakang.</p>
            
            <h3>Contoh</h3>
            <p><strong>Contoh 1:</strong></p>
            <p>Input: <code>s = "A man, a plan, a canal: Panama"</code></p>
            <p>Output: <code>true</code></p>
            <p>Penjelasan: "amanaplanacanalpanama" adalah palindrome.</p>
            
            <p><strong>Contoh 2:</strong></p>
            <p>Input: <code>s = "race a car"</code></p>
            <p>Output: <code>false</code></p>
            <p>Penjelasan: "raceacar" bukan palindrome.</p>
            
            <p><strong>Contoh 3:</strong></p>
            <p>Input: <code>s = " "</code></p>
            <p>Output: <code>true</code></p>
            
            <h3>Constraints</h3>
            <ul>
                <li>1 <= s.length <= 2 * 10^5</li>
                <li>String s hanya terdiri dari karakter ASCII yang dapat dicetak</li>
            </ul>
        `,
        template: `/**
 * Cek apakah string adalah palindrome.
 * @param {string} s - String input
 * @return {boolean} - True jika palindrome
 */
function isPalindrome(s) {
    // TODO: Tulis kode kamu di sini
    
}

// Test cases akan dijalankan otomatis
`,
        testCases: [
            { s: "A man, a plan, a canal: Panama", expected: true },
            { s: "race a car", expected: false },
            { s: " ", expected: true },
            { s: "0P", expected: false },
            { s: "Was it a car or a cat I saw?", expected: true }
        ],
        testFunction: (userFunction, testCase) => {
            try {
                const result = userFunction(testCase.s);
                if (typeof result !== 'boolean') {
                    return { pass: false, message: `Output harus berupa boolean, got: ${typeof result}` };
                }
                
                if (result === testCase.expected) {
                    return { pass: true, message: `Berhasil! String "${testCase.s}" ${result ? 'adalah' : 'bukan'} palindrome` };
                } else {
                    return { pass: false, message: `Expected ${testCase.expected}, got ${result}` };
                }
            } catch (error) {
                return { pass: false, message: `Error: ${error.message}` };
            }
        }
    },
    
    group_anagrams: {
        title: "Group Anagrams",
        difficulty: "medium",
        category: "String Processing",
        description: `
            <h3>Deskripsi Soal</h3>
            <p>Diberikan sebuah array string <code>strs</code>, kelompokkan string-string yang merupakan anagram satu sama lain.</p>
            <p>Anagram adalah kata atau frasa yang dibentuk dengan mengubah urutan huruf dari kata atau frasa lain, menggunakan semua huruf persis satu kali.</p>
            <p>Kembalikan array dari grup anagram (urutan dalam grup dan urutan grup tidak masalah).</p>
            
            <h3>Contoh</h3>
            <p><strong>Contoh 1:</strong></p>
            <p>Input: <code>strs = ["eat","tea","tan","ate","nat","bat"]</code></p>
            <p>Output: <code>[["eat","tea","ate"],["tan","nat"],["bat"]]</code></p>
            
            <p><strong>Contoh 2:</strong></p>
            <p>Input: <code>strs = [""]</code></p>
            <p>Output: <code>[[""]]</code></p>
            
            <p><strong>Contoh 3:</strong></p>
            <p>Input: <code>strs = ["a"]</code></p>
            <p>Output: <code>[["a"]]</code></p>
            
            <h3>Constraints</h3>
            <ul>
                <li>1 <= strs.length <= 10^4</li>
                <li>0 <= strs[i].length <= 100</li>
                <li>strs[i] hanya terdiri dari huruf kecil alfabet Inggris</li>
            </ul>
        `,
        template: `/**
 * Kelompokkan string yang merupakan anagram.
 * @param {string[]} strs - Array string
 * @return {string[][]} - Array grup anagram
 */
function groupAnagrams(strs) {
    // TODO: Tulis kode kamu di sini
    
}

// Test cases akan dijalankan otomatis
`,
        testCases: [
            { strs: ["eat","tea","tan","ate","nat","bat"], expected: [["eat","tea","ate"],["tan","nat"],["bat"]] },
            { strs: [""], expected: [[""]] },
            { strs: ["a"], expected: [["a"]] },
            { strs: ["abc","cba","bac","cab"], expected: [["abc","cba","bac","cab"]] }
        ],
        testFunction: (userFunction, testCase) => {
            try {
                const result = userFunction(testCase.strs);
                if (!Array.isArray(result)) {
                    return { pass: false, message: `Output harus berupa array, got: ${typeof result}` };
                }
                
                // Sort both result and expected for comparison
                const sortGroups = (groups) => {
                    return groups.map(group => group.sort()).sort((a, b) => {
                        if (a.length !== b.length) return a.length - b.length;
                        return a.join('').localeCompare(b.join(''));
                    });
                };
                
                const sortedResult = sortGroups(result);
                const sortedExpected = sortGroups(testCase.expected);
                
                if (JSON.stringify(sortedResult) === JSON.stringify(sortedExpected)) {
                    return { pass: true, message: `Berhasil! Ditemukan ${result.length} grup anagram` };
                } else {
                    return { pass: false, message: `Expected ${JSON.stringify(sortedExpected)}, got ${JSON.stringify(sortedResult)}` };
                }
            } catch (error) {
                return { pass: false, message: `Error: ${error.message}` };
            }
        }
    },
    
    longest_consecutive_sequence: {
        title: "Longest Consecutive Sequence",
        difficulty: "hard",
        category: "Array Manipulation",
        description: `
            <h3>Deskripsi Soal</h3>
            <p>Diberikan sebuah array integer tidak terurut <code>nums</code>, cari panjang urutan elemen berurutan (consecutive) terpanjang.</p>
            <p>Urutan harus terdiri dari elemen yang berurutan secara nilai, tetapi tidak harus berurutan di array.</p>
            
            <h3>Contoh</h3>
            <p><strong>Contoh 1:</strong></p>
            <p>Input: <code>nums = [100,4,200,1,3,2]</code></p>
            <p>Output: <code>4</code></p>
            <p>Penjelasan: Urutan terpanjang adalah [1,2,3,4].</p>
            
            <p><strong>Contoh 2:</strong></p>
            <p>Input: <code>nums = [0,3,7,2,5,8,4,6,0,1]</code></p>
            <p>Output: <code>9</code></p>
            
            <h3>Constraints</h3>
            <ul>
                <li>0 <= nums.length <= 10^5</li>
                <li>-10^9 <= nums[i] <= 10^9</li>
            </ul>
            
            <h3>Catatan</h3>
            <p>Solusi optimal: O(n) time menggunakan Set.</p>
        `,
        template: `/**
 * Cari panjang urutan consecutive terpanjang.
 * @param {number[]} nums - Array integer
 * @return {number} - Panjang urutan terpanjang
 */
function longestConsecutive(nums) {
    // TODO: Tulis kode kamu di sini
    
}

// Test cases akan dijalankan otomatis
`,
        testCases: [
            { nums: [100,4,200,1,3,2], expected: 4 },
            { nums: [0,3,7,2,5,8,4,6,0,1], expected: 9 },
            { nums: [], expected: 0 },
            { nums: [1], expected: 1 },
            { nums: [1,2,0,1], expected: 3 }
        ],
        testFunction: (userFunction, testCase) => {
            try {
                const result = userFunction(testCase.nums);
                if (typeof result !== 'number') {
                    return { pass: false, message: `Output harus berupa number, got: ${typeof result}` };
                }
                
                if (result === testCase.expected) {
                    return { pass: true, message: `Berhasil! Panjang urutan consecutive terpanjang adalah ${result}` };
                } else {
                    return { pass: false, message: `Expected ${testCase.expected}, got ${result}` };
                }
            } catch (error) {
                return { pass: false, message: `Error: ${error.message}` };
            }
        }
    }
}; 