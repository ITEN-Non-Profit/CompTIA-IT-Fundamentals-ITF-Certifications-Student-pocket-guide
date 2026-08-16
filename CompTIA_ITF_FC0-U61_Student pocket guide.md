# CompTIA IT Fundamentals (ITF+) FC0-U61

## Student Pocket Guide

> A beginner-friendly guide to computing, infrastructure, software, development, databases, and security

| Publication detail | Information |
|---|---|
| Learning initiative | **IT Education Nepal Nonprofit Learning Initiatives** |
| Website | [iteducationnepal.org](https://iteducationnepal.org) |
| Writer | **Jiwan Bhattarai, CCIE #60261, CEH** |
| Professional role | Mentor, Global IT Security Consultant |
| Edition | 2026 Student Pocket Guide Edition, Version 2.0 |
| Exam blueprint | CompTIA IT Fundamentals (ITF+) FC0-U61, Exam Objectives Version 4.0 |
| Publication status | Independent educational guide for the CompTIA FC0-U61 Certification blueprint |

---

## How to use this guide

CompTIA IT Fundamentals (ITF+) was CompTIA's foundational, entry-level certification below A+. It was designed for students, career explorers, advanced computer users, and non-technical professionals who needed broad digital literacy. It did not require prior work experience.

This guide follows the official FC0-U61 objective order. Read a domain, try its hands-on lab, answer its review questions without looking back, and then use the rapid review and coverage checklist before the exam.

This is not a brain dump and contains no recalled exam questions. The practice items teach the published objectives and the reasoning behind them.

> **Archived-exam notice:** FC0-U61 is a retired, legacy blueprint that was replaced by CompTIA Tech+ FC0-U71. This book preserves FC0-U61 for students completing an older curriculum and for readers who want a structured introduction to IT. It is **not** a preparation guide for FC0-U71. Use the current Tech+ objectives if you plan to take the current exam.

### Exam snapshot

| Detail | FC0-U61 |
|---|---|
| Certification | CompTIA IT Fundamentals (ITF+) |
| Level | Foundational; below A+ |
| Questions | Up to 75 |
| Time | 60 minutes |
| Passing score | 650 on a scale of 900 |
| Published question type | Multiple-choice |
| Experience | No prior experience required |

### Domain weights

| Domain | Weight | Study emphasis |
|---|---:|---|
| 1.0 IT concepts and terminology | 17% | Core language and troubleshooting |
| 2.0 Infrastructure | 22% | Highest-weight domain; hardware, devices, storage, networking, wireless |
| 3.0 Applications and software | 18% | Operating systems, software, browsers, licensing |
| 4.0 Software development concepts | 12% | Languages, logic, and programming building blocks |
| 5.0 Database fundamentals | 11% | Database purpose, structures, and access |
| 6.0 Security | 20% | CIA, device protection, access, encryption, continuity |
| **Total** | **100%** | |

### Pocket habits

- Read the exact task word: **compare**, **classify**, **explain**, **configure**, or **interpret**.
- Eliminate answers that solve a different layer of the problem. A loose cable is not a software fault; a denied permission is not failed authentication.
- Prefer the simplest safe check first. Confirm power, connections, settings, and recent changes before replacing parts.
- Do not confuse a setting with a complete risk decision. Turning on a firewall helps, but business risk also depends on people, data, processes, legal duties, and recovery plans.

## Contents

1. [IT concepts and terminology](#chapter-1)
2. [Infrastructure](#chapter-2)
3. [Applications and software](#chapter-3)
4. [Software development concepts](#chapter-4)
5. [Database fundamentals](#chapter-5)
6. [Security](#chapter-6)
7. [Integrated practice](#chapter-7)
8. [Rapid review](#chapter-8)
9. [High-yield acronyms](#chapter-9)
10. [Timed 75-question readiness assessment](#chapter-10)
11. [Assessment answer key and rationales](#chapter-11)
12. [Final objective-coverage checklist](#chapter-12)

## Publication and trademark note

This independent learning resource is hosted by IT Education Nepal Nonprofit Learning Initiatives. It is not sponsored, endorsed, or approved by CompTIA. CompTIA and its certification marks, including ITF+, A+, and Tech+, belong to CompTIA. Other product and company names remain the property of their owners. Objective titles and exam facts are used only to organize independent instruction. No recalled examination items or unauthorized brain-dump material are included.

---

<a id="chapter-1"></a>

# Chapter 1 — IT concepts and terminology (17%)

## 1.1 Compare and contrast notational systems

Computers ultimately represent data as electrical states. People use several number and character systems to make those states readable.

| System | Symbols | Base | Everyday IT use |
|---|---|---:|---|
| Binary | `0`, `1` | 2 | Bits, permissions, on/off states |
| Decimal | `0`–`9` | 10 | Human counting, quantities, prices |
| Hexadecimal | `0`–`9`, `A`–`F` | 16 | Memory addresses, colors, compact binary display |

Each hexadecimal digit represents four binary bits. For example, decimal `15`, binary `1111`, and hexadecimal `F` are the same value. Hex is useful because `11111111` is easier to read as `FF`.

**Data representation** maps numbers to characters:

- **ASCII** represents a limited set of English letters, digits, punctuation, and control characters. Capital `A` is decimal 65.
- **Unicode** represents characters from many writing systems, symbols, and emoji. UTF-8 is a widely used Unicode encoding.

If text shows boxes, question marks, or garbled characters, check the file's encoding and the application's selected encoding before assuming the file is damaged.

**Common mistake:** hexadecimal is a notation, not encryption. Converting text to hex changes its display, but does not protect it.

## 1.2 Compare and contrast fundamental data types and their characteristics

A data type tells a program what kind of value it is handling and what operations make sense.

| Type | Example | What it represents | Typical mistake |
|---|---|---|---|
| `char` | `'J'` | One character | Treating it as a whole word |
| string | `"Jiwan"` | A sequence of characters | Assuming numeric-looking text can be added numerically |
| integer | `42` | A whole number | Using it when decimals matter |
| float | `19.95` | A number with a fractional part | Expecting perfect precision for every decimal |
| Boolean | `true` | One of two logical states | Confusing `false` with blank or zero in every language |

A postal code such as `00123` should usually be stored as a string, not an integer, because the leading zeros matter and nobody adds postal codes. Currency often needs a decimal type designed for exact financial values rather than a general floating-point type.

**Validate:** identify the allowed values and operations. If the answer may be yes/no, Boolean fits. If it may contain letters or leading zeros, use a string.

## 1.3 Illustrate the basics of computing and processing

Most computing can be traced through four functions:

1. **Input:** data enters through a keyboard, sensor, microphone, scanner, network, or file.
2. **Processing:** the CPU and software follow instructions to transform the data.
3. **Output:** the result appears on a display, speaker, printer, network, or file.
4. **Storage:** data is retained for later use.

**Mini-scenario:** A barcode scanner reads a product code (input). Point-of-sale software looks up the item and calculates tax (processing). The price appears and a receipt prints (output). The sale is saved in a database (storage).

Input and output describe roles, not permanent device categories. A touchscreen both displays information and receives touch. A network interface both sends and receives.

When the result is wrong, trace the path. Was the source data correct? Did the program apply the right rule? Was the output device selected? Was the result saved?

## 1.4 Explain the value of data and information

**Data** is recorded raw material: `18`, `21`, and `27`. **Information** is data given context and meaning: “Daily support tickets increased from 18 to 27 this week.” Data can exist without a useful conclusion; information supports understanding and decisions.

Data and information are **assets** because they can save time, support revenue, prove transactions, reveal trends, or satisfy legal duties. Their value is why organizations invest in security. Protection should match sensitivity, business value, legal obligations, and recovery needs.

A simple data-driven decision cycle is:

1. **Capture and collect** relevant, lawful, accurate data.
2. **Correlate** related records, such as complaints with product versions.
3. Produce **meaningful reports** for the intended audience.
4. Check quality and limitations before acting.

Bad inputs create bad outputs. Duplicate records, missing fields, biased samples, stale data, or incorrect correlations can produce confident but poor decisions.

### Intellectual property and digital products

| Protection | Protects | Example |
|---|---|---|
| Trademark | Brand identifiers | A product name or logo |
| Copyright | Original expression | Source code, a manual, music, graphics |
| Patent | A qualifying invention or process | A novel technical invention, subject to law |

A **digital product** is distributed electronically: software, an ebook, an online course, a game, or a media file. Ownership of a copy does not automatically grant the right to reproduce or redistribute it. Intellectual-property law varies by jurisdiction; technical access is not the same as legal permission.

## 1.5 Compare and contrast common units of measure

### Storage

A **bit** is one binary digit. A **byte** is eight bits. Storage is commonly expressed as KB, MB, GB, TB, and PB. Vendors often use decimal multiples, while some operating systems calculate with binary multiples, so displayed capacity may differ from the label.

| Unit | Rough scale | Familiar example |
|---|---:|---|
| KB | thousands of bytes | Small text document |
| MB | millions of bytes | Photo or short audio file |
| GB | billions of bytes | Application, video, phone capacity |
| TB | trillions of bytes | Computer drive or backup set |
| PB | quadrillions of bytes | Large data center storage |

### Throughput and processing speed

Network throughput is measured in **bits per second**: bps, Kbps, Mbps, Gbps, and Tbps. File size is usually in bytes. An ideal 80 Mb transfer over a 10 Mbps link needs at least eight seconds, and real transfers take longer because of overhead and changing conditions.

CPU clock rate is expressed in **MHz** or **GHz**, meaning millions or billions of cycles per second. Clock rate alone does not prove which CPU is faster; architecture, core count, cache, workload, and thermal limits matter.

**Pocket check:** lowercase `b` means bit; uppercase `B` means byte. Do not compare a 100 MB file directly with a 100 Mbps link.

## 1.6 Explain the troubleshooting methodology

Troubleshooting is a controlled process, not random clicking.

1. **Identify the problem.** Gather information, question users without blame, identify symptoms, duplicate the issue if safe, note recent changes, and separate multiple problems.
2. **Research** an approved knowledge base or reliable Internet source when appropriate. Match the product and version.
3. **Establish a theory of probable cause.** Question the obvious, consider more than one approach, and divide the system into parts to isolate the fault.
4. **Test the theory.** Change one thing at a time. If confirmed, determine the next steps. If not, form a new theory or escalate.
5. **Plan the fix** and identify potential effects: downtime, data loss, security impact, cost, permissions, and rollback.
6. **Implement the solution or escalate.** Stay within your authority and ability.
7. **Verify full functionality** and add preventive measures when appropriate. Test more than the original symptom if the change could affect other functions.
8. **Document** findings, actions, outcomes, and lessons learned.

**Mini-scenario:** A monitor is black. First confirm the symptom, power light, cable, selected input, and whether another display works. Replacing the computer before checking the unplugged power lead is expensive guesswork.

**Safety rule:** stop and escalate for electrical hazards, smoke, burning smells, swollen batteries, possible data loss, suspected compromise, or work outside your authorization.

### Chapter 1 pocket checklist

- Can I convert a small value among binary, decimal, and hex?
- Can I choose char, string, integer, float, or Boolean from a scenario?
- Can I trace input → processing → output → storage?
- Can I separate raw data from useful information?
- Can I distinguish bit/byte, throughput/capacity, and MHz/GHz?
- Can I recite the troubleshooting steps in order and explain why verification and documentation matter?

### Chapter 1 review

1. Why should `0074` be stored as a string when it is an employee code?
2. Which unit is most suitable for a home Internet connection: GB or Mbps?
3. A report uses old sales records. Which data-quality issue should be checked first?
4. After a fix removes the symptom, what two closing steps remain?

### Hands-on lab 1: trace and troubleshoot a task

**Purpose:** Connect input, processing, output, storage, file extensions, and troubleshooting.  
**Time:** 15 minutes.  
**Requirements:** A device you may use and a basic text editor. Work only with a disposable practice file.

1. Open a text editor and type one sentence.
2. Label the input, processing, output, and storage involved.
3. Save the file, close it, and reopen it.
4. Change its extension in a copy and observe what the application does; restore it afterward.
5. Record the symptom, one theory, the safe test, the result, and your final verification.

**Expected result:** The renamed copy may lose its normal application association or fail to open correctly even though its underlying content has not been converted.  
**Validation:** Reopen the original file and confirm its sentence is unchanged. Explain why changing an extension is not the same as converting a format.  
**Cleanup:** Delete the disposable copy or restore its original extension.  
**Reflection:** Which observation was a symptom, and what evidence confirmed the cause?

#### Chapter 1 review answers

1. Store `0074` as a string because the leading zeros are part of the identifier and arithmetic is not required.
2. Mbps measures throughput. GB measures an amount of data or storage capacity.
3. Check **timeliness or recency**. Old records may no longer represent current conditions.
4. Verify full system functionality, apply suitable preventive measures, and document the findings, actions, and outcome.

---

<a id="chapter-2"></a>

# Chapter 2 — Infrastructure (22%)

Infrastructure is the physical and network foundation that lets software run. This is the highest-weight domain, so know what each part does, how parts connect, and what to check first.

## 2.1 Classify common types of input/output device interfaces

### Networking interfaces

| Interface | Medium/use | Key point |
|---|---|---|
| RJ-11 | Telephone/DSL wiring | Smaller than RJ-45; commonly fewer contacts |
| RJ-45 | Ethernet network cabling | Common wired LAN connector |
| Bluetooth | Short-range wireless peripherals | Pairing, range, battery, and interference matter |
| NFC | Very short-range wireless | Tap-to-pay, badges, quick pairing |

### Peripheral interfaces

- **USB:** common for keyboards, storage, phones, printers, and power. The connector shape does not guarantee a particular speed or feature.
- **FireWire:** older high-speed interface once common for video and storage.
- **Thunderbolt:** high-speed data, display, and sometimes power over compatible ports and cables.
- **Bluetooth:** wireless connection for headsets, mice, and other peripherals.
- **RF:** radio-frequency receivers used by some wireless keyboards, mice, and controls.

### Graphics interfaces

| Interface | Signal | Audio? | Notes |
|---|---|---:|---|
| VGA | Analog | No | Older blue 15-pin connector; image quality falls with distance/noise |
| DVI | Digital and/or analog by version | Usually no | Older monitor interface |
| HDMI | Digital | Yes | Common on TVs, monitors, and consoles |
| DisplayPort | Digital | Yes | Common on PCs; supports high resolutions and refresh rates |
| Mini DisplayPort | Digital | Yes | Smaller DisplayPort form factor |

**First checks:** match the physical connector, confirm the port supports the needed function, seat the cable, select the correct display input, and try a known-good cable. Adapters may change shape without converting the signal.

## 2.2 Given a scenario, set up and install common peripheral devices to a laptop/PC

FC0-U61 expects printers, scanners, keyboards, mice, cameras, external hard drives, speakers, and displays.

### Safe installation pattern

1. Check compatibility, required ports, power, operating-system support, and trusted driver source.
2. Connect power and data as directed.
3. Let **plug-and-play** detect the device. If it cannot, install the correct signed driver from the operating-system service or manufacturer.
4. Complete other required steps: pair Bluetooth, load paper, choose audio output, adjust display arrangement, grant camera permission, select a default device, or calibrate it when required.
5. For **IP-based peripherals**, connect each device to the network, find its IP address, and use its web-based configuration page if required. Change default credentials, install supported firmware, restrict management access, and save a configuration record.
6. If an address changes unexpectedly, consider a DHCP reservation or a documented static address that does not conflict with the DHCP pool. Configure a gateway and DNS only when the peripheral needs services outside its local network.
7. Test the real function: print a page, scan a document, record audio, copy a file, or extend the desktop.

| Symptom | Check first |
|---|---|
| Printer says offline | Power, connection, selected printer, queue, paper/errors |
| External drive absent | Cable, port, power, disk management, compatible file system |
| No sound | Volume/mute, selected output, cable or Bluetooth pairing |
| Blurry/no display | Input source, cable, native resolution, display arrangement |
| Camera blocked | Privacy permission, app selection, physical shutter |

Eject removable storage through the operating system before unplugging it when writes may still be pending.

## 2.3 Explain the purpose of common internal computing components

| Component | Purpose | Failure clue or first check |
|---|---|---|
| Motherboard/system board | Connects CPU, memory, storage, expansion, and ports | Inspect power and seating; verify compatible parts |
| Firmware/BIOS | Starts hardware and begins boot; stores low-level settings | Check boot order, date/time, recognized devices |
| RAM | Fast, volatile working memory | Crashes, failure to boot, memory errors; reseat/test safely |
| CPU | Executes instructions | Heat, shutdowns, poor performance; check cooling and workload |
| Storage | Retains OS, apps, and files | Slow access, errors, missing drive; back up before risky tests |
| GPU | Produces graphics and accelerates parallel work | Artifacts, black screen, driver or cable issue |
| Cooling | Removes heat with heat sinks, fans, and airflow | Noise, throttling, shutdown; clear vents and check fans |
| NIC | Provides wired or wireless networking | No link, no networks, disabled adapter, driver issue |

### CPU categories

- **ARM** processors emphasize power efficiency and are common in phones and tablets; they also appear in computers and servers.
- **32-bit** processors and operating systems have a smaller address space and software limits.
- **64-bit** systems can address much more memory and run modern 64-bit software. Application and driver compatibility still matters.

Laptops, workstations, and servers may use either architecture depending on design. Architecture is not the same thing as device type.

### Storage and NIC choices

A spinning **hard disk drive (HDD)** offers low cost per capacity but has moving parts and slower random access. A **solid-state drive (SSD)** is faster, silent, and shock-resistant but may cost more per unit of capacity.

A NIC may be **wired or wireless**, and **on-board or an add-on card**. Wired Ethernet usually offers predictable speed and low interference; wireless offers mobility. An add-on NIC can add ports or features, but it consumes an expansion slot.

**Hardware vs. software:** the NIC is hardware; its driver and network settings are software. A network failure can come from either.

## 2.4 Compare and contrast common Internet service types

| Service | Path | Strength | Trade-off/check |
|---|---|---|---|
| Fiber optic | Light through fiber | High throughput, low latency, long distance | Availability and installation cost |
| Cable | Cable-provider coaxial network | Broad availability, good speed | Shared local capacity can affect performance |
| DSL | Telephone copper pair | May use existing phone line | Speed falls with distance/line quality |
| RF wireless | Fixed radio link | Useful where cabling is difficult | Line of sight, weather, interference |
| Satellite | Radio to/from satellite | Covers remote areas | Latency, weather, data limits |
| Cellular | Mobile carrier network | Portable and quick to deploy | Coverage, congestion, plan limits |

Advertised rate is not guaranteed application performance. Check signal, local Wi-Fi, provider status, latency, packet loss, and whether other users are consuming capacity.

## 2.5 Compare and contrast storage types

**Volatile storage** loses its contents without power; RAM is the main example. **Non-volatile storage** retains data; HDDs, SSDs, optical discs, and flash drives are examples.

| Location/type | Best fit | Main trade-off |
|---|---|---|
| Local RAM | Active programs and data | Volatile; not file storage |
| Local HDD | Large, economical capacity | Mechanical wear and slower access |
| Local SSD | Fast boot and application loading | Cost and finite write endurance |
| Optical | Distribution or offline archive | Low capacity/speed; drive availability |
| Flash drive | Portable transfer | Easy to lose; quality and security vary |
| NAS | Shared storage appliance on a LAN | Network and appliance availability |
| File server | Managed shared files and permissions | Administration and server cost |
| Cloud storage service | Sync, sharing, off-site access | Internet, account, privacy, and subscription dependence |

Storage location is not a backup by itself. Sync can copy accidental deletion or ransomware. A backup should be a recoverable, tested copy with appropriate separation from the original.

## 2.6 Compare and contrast common computing devices and their purposes

| Device | Designed for |
|---|---|
| Mobile phones | Communication, apps, sensors, portable Internet |
| Tablet | Touch-first portable media, forms, and lightweight work |
| Laptop | General computing with built-in display, keyboard, and battery |
| Workstation | Demanding professional workloads, often with powerful CPU/GPU/RAM |
| Server | Providing services or resources to other systems |
| Gaming consoles | Standardized interactive entertainment platforms |
| IoT device | Purpose-built sensing, control, or communication |

Internet of Things examples include home appliances, automation devices, thermostats, security systems, modern cars, IP cameras, streaming-media devices, and medical devices. IoT devices often trade general-purpose flexibility for convenience and automation. Check update support, default credentials, data collection, network isolation options, and what happens if the Internet service fails.

## 2.7 Explain basic networking concepts

### Packet communication

Network data is divided into **packets** containing addressing and control information. Devices forward packets toward a destination, where data is reassembled. Packet loss, delay, and congestion can harm calls and streaming even when the connection is technically “up.”

**DNS** translates a human-friendly host name in a URL, such as `example.com`, into an IP address. The URL contains more than a host name; it can include the scheme (`https`), path, and parameters. If a site works by IP but not by name, DNS is a likely area to test.

A **LAN** covers a limited local area such as a home, school, or office. A **WAN** connects LANs across larger distances; the Internet is the largest familiar example.

### Addresses

- An **IP address** is a logical network address used to move packets between networks. It may change.
- A **MAC address** identifies a network interface at the local link layer. It is not a reliable proof of a person's identity and can be changed or spoofed.

### Basic protocols

| Protocol | Purpose |
|---|---|
| HTTP | Transfers web content without transport encryption |
| HTTPS | HTTP protected with TLS; check certificate warnings |
| POP3 | Downloads email, traditionally with a local-storage focus |
| IMAP | Synchronizes mail and folders across devices |
| SMTP | Sends and relays email |

### Network devices

| Device | Main job |
|---|---|
| Modem | Connects to and converts for the service provider's access medium |
| Router | Moves traffic between networks and usually provides the default gateway |
| Switch | Connects devices within a wired LAN and forwards frames |
| Access point | Connects wireless devices to a network |
| Firewall | Allows or blocks traffic according to rules |

Home products may combine modem, router, switch, access point, and firewall functions in one box. The functions remain distinct even when the hardware is combined.

## 2.8 Given a scenario, install, configure, and secure a basic wireless network

### FC0-U61 wireless standards

| Standard | Band commonly associated | Common theoretical maximum | Practical limitation |
|---|---|---:|---|
| 802.11a | 5 GHz | 54 Mbps | Older; shorter reach through obstacles than 2.4 GHz under similar conditions |
| 802.11b | 2.4 GHz | 11 Mbps | Very slow and can reduce mixed-network efficiency |
| 802.11g | 2.4 GHz | 54 Mbps | Legacy; shares a crowded band |
| 802.11n | 2.4 or 5 GHz | Up to 600 Mbps | Maximum requires multiple spatial streams and wide channels |
| 802.11ac | 5 GHz | Multi-gigabit in high-end configurations | Client capability, streams, channel width, range, and interference limit results |

These are signaling limits, not promised file-transfer rates. Protocol overhead, retransmissions, client design, channel width, spatial streams, distance, and interference reduce usable throughput. A connection uses capabilities shared by the client and access point. Walls, distance, metal, neighboring networks, microwaves, and other radio sources cause **interference** or **attenuation**. A strong signal does not guarantee an uncongested Internet connection.

### Basic secure setup

1. Place the wireless router centrally and connect its Internet/WAN service.
2. Open its local administration page using the vendor's documented method.
3. Change the default administrator password.
4. Change the default **SSID** to a non-sensitive name.
5. Install supported firmware updates.
6. Choose the strongest mode all required clients support. For the FC0-U61 list, prefer WPA2 over WPA, and never choose WEP for security.
7. Set a long, unique wireless passphrase. Do not use an **open** network for private traffic.
8. Connect a client, verify its IP settings, test local and Internet access, and reconnect after a restart.
9. Save a secure record of the configuration and recovery method.

| Network option | Meaning | Risk/fit |
|---|---|---|
| Open | No Wi-Fi encryption | Traffic and access are exposed; avoid for private networks |
| Captive portal | Web page requests acceptance or login | Access control page does not itself guarantee traffic encryption |
| WEP | Obsolete Wi-Fi protection | Easily broken; do not use |
| WPA | Older improvement over WEP | Legacy only; replace where possible |
| WPA2 | Stronger FC0-U61-listed choice | Use a strong passphrase and current settings |

Changing the SSID or hiding it is not strong security. A firewall does not make weak Wi-Fi encryption safe. Security is layered.

### Infrastructure mini-scenarios

**A new USB printer does not print.** Confirm power and cable, allow plug-and-play, check the correct printer and queue, install the trusted driver if required, print a test page, and document the result.

**A laptop joins Wi-Fi but websites do not open.** Confirm whether other devices work, inspect the assigned IP/gateway/DNS, test the router, and separate local Wi-Fi from provider or DNS failure.

**A video call freezes while file downloads continue.** Latency, congestion, packet loss, or Wi-Fi interference may hurt real-time traffic. A raw speed number alone does not explain quality.

### Chapter 2 pocket checklist

- Match RJ-11/RJ-45, USB/Thunderbolt, and VGA/HDMI/DVI/DisplayPort to their uses.
- Install and validate each listed peripheral safely.
- Explain motherboard, BIOS/firmware, RAM, CPU, storage, GPU, cooling, and NIC.
- Compare fiber, cable, DSL, RF, satellite, and cellular service.
- Separate volatile/non-volatile and local/network/cloud storage.
- Match phones, tablets, laptops, workstations, servers, consoles, and IoT to purpose.
- Explain packets, DNS, LAN/WAN, IP/MAC, basic protocols, and network devices.
- Configure a basic wireless network and compare open, captive portal, WEP, WPA, and WPA2.

### Chapter 2 review

1. Which connector normally carries Ethernet: RJ-11 or RJ-45?
2. Why might an external drive work on one computer but not another?
3. Which device forwards traffic between a home LAN and the Internet?
4. A website opens by IP address but not by host name. What service should you test?
5. What is the strongest listed FC0-U61 wireless protection: WEP, WPA, or WPA2?
6. Why is cloud synchronization not automatically a backup?

### Hands-on lab 2: map a small network

**Purpose:** Identify local network roles and separate LAN, Wi-Fi, DNS, and Internet functions.  
**Time:** 20–30 minutes.  
**Requirements:** A network you own or are authorized to inspect. Do not publish addresses, passwords, or screenshots containing private details.

1. Draw your Internet service, modem or service terminal, router, switch/access point, and two client devices.
2. On one client, record the connection type, private IP address, default gateway, and DNS server. Do not publish the information.
3. Identify which box performs routing, wireless access, switching, and firewall functions.
4. Review the wireless security mode and administrator password status. Change settings only if you own or are authorized to manage the network.
5. Test one local connection and one Internet site. Note what each test proves—and what it does not.

**Windows:** Review `Settings > Network & internet` or `ipconfig`.  
**macOS:** Review `System Settings > Network` or the network details panel.  
**Linux:** Review the desktop network panel or `ip address` and the system's documented route/DNS tools.

**Expected result:** Your map should show where routing, switching, wireless access, firewalling, addressing, and DNS occur. One home gateway may perform several roles.  
**Validation:** Explain why reaching a local printer does not prove that DNS or the Internet works.  
**Cleanup:** Close administration pages and securely store or destroy notes containing network details.  
**Reflection:** Which single device failure would affect the most services in your map?

#### Chapter 2 review answers

1. RJ-45 is the common Ethernet connector term; RJ-11 is associated with telephone/DSL wiring.
2. Check the port, cable, power, driver, file-system compatibility, permissions, and disk-management state.
3. A router forwards traffic between the home LAN and the Internet-facing network.
4. Test DNS because name resolution is failing while IP connectivity may still work.
5. WPA2 is the strongest wireless protection listed in the FC0-U61 objective. WEP is obsolete and WPA is older.
6. Synchronization may copy deletion, corruption, or ransomware. A backup needs recoverable versions and suitable separation.

---

<a id="chapter-3"></a>

# Chapter 3 — Applications and software (18%)

Software is the set of instructions and data that tells hardware what to do. An application helps a user complete a task; an operating system manages the computer and provides services to applications.

## 3.1 Explain the purpose of operating systems

The operating system (OS) is the working layer between applications and hardware. An application asks the OS to save a file, display a window, use memory, or send data; the OS coordinates the device and protects resources.

### Core responsibilities

- **Disk management:** partitions, formats, names, and tracks storage volumes.
- **Process management and scheduling:** gives running programs CPU time. A stuck process may be killed or ended through a task tool.
- **Application management:** installs, starts, updates, and removes applications.
- **Memory management:** assigns RAM and virtual memory while keeping processes separated.
- **Device management:** uses drivers to communicate with hardware.
- **Access control and protection:** checks identities and permissions and isolates resources.

Ending a task can lose unsaved work. Before doing it, wait briefly, confirm the correct process, and check whether the application is busy rather than frozen.

### Types of OS

| OS type | Primary fit | Example characteristics |
|---|---|---|
| Mobile device OS | Phones and tablets | Touch, radios, sensors, app permissions, power management |
| Workstation OS | A user's desktop or laptop | Interactive applications and local peripherals |
| Server OS | Shared services and many clients | Central management, services, resilience, remote administration |
| Embedded OS | A dedicated device | Small, purpose-built, sometimes stored as firmware |
| Type 1 hypervisor | Virtual machines | Runs directly on hardware and hosts guest operating systems |

**Firmware** is low-level software stored on a device that controls its basic operation. It is software, even though it is closely tied to hardware.

## 3.2 Compare and contrast components of an operating system

### File systems and features

A file system organizes files and metadata on a storage volume.

| File system | Common association | Pocket caveat |
|---|---|---|
| NTFS | Windows internal drives | Supports permissions, journaling, encryption, and large files |
| FAT32 | Broad removable-media compatibility | Lacks modern permissions; 4 GB maximum individual file size |
| HFS | Older Apple systems | Apple-focused; largely superseded on current devices |
| ext4 | Linux | Journaling and Linux permissions; limited native support elsewhere |

Important file-system features include:

- **Compression:** saves space by encoding data more compactly; it uses processing time and may not help already-compressed files.
- **Encryption:** protects readable content with a key; key loss can make data unrecoverable.
- **Permissions:** control which identities may read, write, execute, or manage an item.
- **Journaling:** records intended file-system changes to aid recovery after interruption; it is not a backup.
- **Limitations:** maximum file/volume sizes, features, and operating-system support.
- **Naming rules:** allowed characters, reserved names, length, and case sensitivity.

Naming behavior changes by file system and operating system. Windows commonly blocks characters such as `\ / : * ? " < > |` in ordinary file names and reserves names such as `CON` and `PRN`. Linux file names are case-sensitive, so `Report.txt` and `report.txt` can be different files. Windows commonly treats those names as the same. Avoid trailing spaces, ambiguous extensions, and names that become too long when the full folder path is included.

File-system limitations can appear as misleading application errors. FAT32, for example, cannot store one file larger than about 4 GB even when the drive has plenty of unused capacity. Journaling can help recover file-system consistency after a crash, but it cannot restore a deleted document. Permissions control access, while encryption protects readable content; one does not replace the other.

### Files, services, processes, drivers, and utilities

- **Folders/directories** organize files in a hierarchy.
- **File types and extensions** help identify formats and associated applications. An extension is a label, not proof that content is safe or valid.
- A **service** runs in the background to provide a function, often without an open window.
- A **process** is a running instance of a program.
- A **driver** lets the OS control a hardware device.
- A **utility** performs maintenance or configuration, such as backup, storage cleanup, or task scheduling.
- **Task scheduling** starts a program or job at a trigger or set time. Confirm permissions, power state, and outcome logs.

### Interfaces

A **graphical user interface (GUI)** uses windows, icons, menus, and pointer/touch controls. A **console or command line** accepts typed commands. GUIs aid discovery; command lines are precise, repeatable, and useful for remote work, but a small typing error can matter.

**First checks for a file problem:** confirm the path, name and extension, current account, permissions, free space, file lock, and compatible application. Do not disable security controls merely to make the error disappear.

## 3.3 Explain the purpose and proper use of software

Choose software by the work, data sensitivity, compatibility, support, license, and accessibility needs—not by how many features it advertises.

### Productivity software

| Type | Good use |
|---|---|
| Word processor | Letters, reports, and formatted text |
| Spreadsheet | Calculations, tables, sorting, and small data analysis |
| Presentation software | Visual support for a talk or lesson |
| Web browser | Web applications and sites |
| Visual diagramming software | Flows, layouts, networks, and relationships |

A spreadsheet is not automatically a safe multi-user database. A presentation should support the speaker, not become an unreadable document projected on a wall.

### Collaboration software

Email clients handle messages and calendars; conferencing tools carry live audio/video; instant messaging supports quick conversation; online workspaces organize team activity; **document sharing** tools coordinate file access and versions. Before sharing, check the audience, permission level, link expiration, and whether the file contains hidden or sensitive information.

### Business software

Database software manages structured records. Project-management software tracks tasks, dates, dependencies, and resources. Business-specific applications support fields such as health care, retail, or manufacturing. Accounting software records financial activity and demands careful permissions, audit trails, and backups.

**Common failure:** using a personal account or unapproved consumer service for business data may create privacy, ownership, retention, and recovery problems even if the app works correctly.

## 3.4 Explain methods of application architecture and delivery models

### Delivery methods

| Delivery | Where app runs/data may live | Network need | Trade-off |
|---|---|---|---|
| Locally installed | Application and often files on the device | Not required for core use | Works offline; local updates, storage, and backups matter |
| Local network hosted | Service or files on an organization's network | Local network required; Internet may not be | Central control; depends on local servers/network |
| Cloud hosted | Provider systems reached over the Internet | Internet and active service required | Easy access/scaling; provider, account, privacy, and outage dependence |

Cloud-hosted does not mean data can never be cached or downloaded locally. Read the product design and policy.

### Architecture models

| Model | Separation | Simple example |
|---|---|---|
| One-tier | Interface, logic, and data together | Stand-alone desktop tool |
| Two-tier | Client communicates with data/server tier | Desktop client querying a database server |
| Three-tier | Presentation, application logic, and data tiers | Web page → application server → database |
| n-tier | More specialized layers/services | Large service split across APIs and systems |

More tiers can improve scaling, maintenance, and security separation, but add network calls, components, and troubleshooting complexity.

## 3.5 Given a scenario, configure and use web browsers

Browsers run powerful applications and handle valuable identity data. Change settings deliberately.

- **Cache:** saved local copies can speed pages. Clear it when stale content or corrupted cached files cause trouble; the next load may be slower.
- **Client-side scripting:** provides interactive behavior. Deactivating it can reduce a risk or help test a problem, but many sites will break.
- **Add-ons/extensions:** install only from legitimate sources with necessary permissions. Add, remove, enable, or disable one at a time when testing.
- **Private browsing:** reduces local history and cookie retention after the session. It does not hide activity from the site, employer, network provider, or Internet service provider.
- **Proxy settings:** direct browser traffic through an intermediary. Wrong settings can block access; organizational proxies may enforce policy.
- **Certificates:** help authenticate a site and establish encrypted HTTPS. Check name, date, trust chain, and warnings. Do not click through an invalid-certificate warning for a sensitive site.
- **Popup and script blockers:** reduce unwanted behavior but can block required application functions.
- **Compatibility:** some applications require a supported browser, version, feature, or extension.

**Browser fault-isolation order:** verify the URL and network, try a known-good site, note the exact error, check time/date for certificate issues, test a private window, disable a suspect extension, clear site data/cache if justified, then compare another supported browser.

## 3.6 Compare and contrast general application concepts and uses

### Platform compatibility

**Single-platform software** is built for one operating system or environment. **Cross-platform software** supports more than one. Cross-platform does not guarantee identical features, file rendering, drivers, or plug-ins. Check the exact OS version, CPU architecture, RAM/storage, dependencies, and file format.

### Licensing

| License concept | Meaning |
|---|---|
| Single use | Licensed for one user or installation as defined by the agreement |
| Group/site license | Covers a defined group or location |
| Concurrent license | Limits how many users may use the software at the same time |
| Open source | Source code available under a license that grants specified rights |
| Proprietary | Controlled under the owner's license; source is usually not supplied |
| Subscription | Continued rights/services for recurring payment |
| One-time purchase | Purchase once, with rights and upgrade terms defined by the license |
| Product key/serial number | Identifier used to activate or prove entitlement |

Open source does not mean “no license,” “always free of cost,” or “automatically secure.” Proprietary does not mean “always supported” or “automatically safer.” Read the agreement.

### Licensing scenarios

- One person installs a paid editor on one authorized device: check the **single-use** terms.
- A school licenses the same program for a laboratory: use a **site or group license** if its scope covers that location and those users.
- A company owns 100 installations but permits only 20 people to run the program at once: that is a **concurrent license**.
- A subscription expires: the application may stop, become read-only, lose cloud services, or continue with limited rights. The agreement decides.
- Source code is available online: confirm the open-source license before copying, modifying, or redistributing it.

Keep product keys and serial numbers private, but do not treat them as proof that any installation is permitted. The license agreement and purchase record establish entitlement.

### Installation best practices

1. Confirm source, compatibility, license, storage, permissions, and backup/restore needs.
2. Read the instructions and agreement.
3. Review **advanced options** for install location, add-ons, default apps, data collection, and startup behavior.
4. Avoid bundled unwanted software.
5. Install supported updates and validate the application with a small test.
6. Record license and recovery information securely.

### Chapter 3 pocket checklist

- Explain each OS management role and distinguish mobile, workstation, server, embedded, and Type 1 hypervisor systems.
- Compare NTFS, FAT32, HFS, and ext4 and their major features.
- Separate services, processes, drivers, utilities, files, and interfaces.
- Match productivity, collaboration, and business software to real tasks.
- Compare local, local-network, and cloud delivery plus one/two/three/n-tier architecture.
- Configure cache, scripting, extensions, private browsing, proxy, certificates, and blockers safely.
- Compare compatibility and every listed license model; apply safe installation steps.

### Chapter 3 review

1. Which OS component lets the system communicate with a printer model?
2. Why can FAT32 reject a 6 GB video even when the drive has 40 GB free?
3. Does private browsing hide traffic from the organization operating the network?
4. What is the central difference between a process and a service?
5. A cloud application is unreachable. Name three separate dependencies to check.

### Hands-on lab 3: inspect an operating system and browser

**Purpose:** Observe processes, services, files, permissions, scheduled tasks, browser controls, and certificates without changing system state.  
**Time:** 25 minutes.  
**Requirements:** A device and account you may inspect. Use a reputable HTTPS site and do not disable organizational controls.

1. Open the system's process/task tool and identify one application process and one background service. Do not end either.
2. Inspect a file's name, extension, size, location, and permissions.
3. Find the task-scheduling utility and review an existing task without changing it.
4. In a browser, identify the cache control, extension list, private mode, proxy area, and certificate information for an HTTPS site.
5. Explain in one sentence what private mode protects and what it does not.

**Expected result:** You should be able to point to a process, a background service, file metadata, a scheduled task, an extension list, and a valid site certificate.  
**Validation:** State the certificate's site name and validity period without copying private account information. Confirm that private browsing reduces local session history but does not hide traffic from the site or network operator.  
**Cleanup:** Close private windows and system tools. Make no changes to tasks, services, permissions, proxy settings, or certificates.  
**Reflection:** Which browser setting would you test first for a site that works in a private window but not in a normal window?

#### Chapter 3 review answers

1. A driver lets the operating system communicate with the printer hardware.
2. FAT32 has an individual-file limit of about 4 GB, regardless of total free space.
3. No. Private browsing limits selected local history; it does not hide traffic from the organization operating the network.
4. A process is a running program instance. A service is a background function implemented by one or more processes.
5. Valid checks include local connectivity, DNS, browser compatibility, proxy settings, identity/account status, subscription status, and provider availability.

---

<a id="chapter-4"></a>

# Chapter 4 — Software development concepts (12%)

Programming turns a problem-solving method into instructions a computer can follow. FC0-U61 tests recognition and logic, not advanced coding.

## 4.1 Compare and contrast programming language categories

| Category | How it is used | Examples of work | Trade-off |
|---|---|---|---|
| Interpreted | An interpreter executes source at runtime | Automation and rapid development | Portable and quick to test; needs interpreter and may run slower |
| Scripting language | Often interpreted and used to automate or coordinate systems | Shell and administration scripts | Efficient for automation; interpreter and environment dependencies matter |
| Scripted language/runtime | Source is executed by a host or runtime rather than delivered as a native executable | Browser-side JavaScript or an application macro | Easy to distribute inside its host; depends on the host's security and compatibility |
| Markup | Describes structure or presentation rather than general algorithms | HTML/XML documents | Excellent for structure; not a general-purpose replacement for programming |
| Compiled | Source is translated into executable form before use | Native applications and systems | Fast deployment artifact; build and platform compatibility matter |
| Query | Requests or changes data in a database | SQL queries and definitions | Expressive for data; depends on database rules and permissions |
| Assembly | Human-readable form close to processor instructions | Firmware and low-level optimization | Precise hardware control; difficult and architecture-specific |

The official objective lists both scripting languages and scripted languages. In everyday use, the labels overlap. For FC0-U61, focus on the shared idea: a runtime or host executes the source when needed. One language can also cross categories depending on its implementation. HTML is markup, SQL is a query language, and assembly is low-level.

## 4.2 Given a scenario, use programming organizational techniques and interpret logic

Before writing code, developers often model the solution.

- **Pseudocode** expresses logic in readable, language-neutral steps.
- A **flowchart** uses standard shapes and directional arrows to show sequence and decisions.
- **Sequence** means steps occur in a defined order.
- **Branching** chooses a path based on a condition.
- **Looping** repeats work while or until a condition is met.

```text
INPUT temperature
IF temperature > 30
    DISPLAY "Hot"
ELSE
    DISPLAY "Not hot"
END IF
```

The `IF` creates a branch. There is no loop. Test boundary values: 29, 30, and 31. At exactly 30, this logic displays “Not hot” because the condition uses `>` rather than `>=`.

```text
SET attempts = 0
WHILE attempts < 3
    ASK for PIN
    SET attempts = attempts + 1
END WHILE
```

The counter changes each time, so the loop can finish. A common failure is an **infinite loop** caused by a condition that never becomes false.

**Flowchart reading:** follow arrows, identify the start/end, note decision labels such as Yes/No, and trace one set of input values at a time.

### Common flowchart symbols

| Symbol | Usual shape | Meaning |
|---|---|---|
| Terminator | Oval or rounded rectangle | Start or end |
| Process | Rectangle | Calculation or action |
| Input/output | Parallelogram | Read input or display/write output |
| Decision | Diamond | Branch based on a condition |
| Flow line | Arrow | Direction of control |
| Connector | Small circle | Continue the flow elsewhere without crossing many lines |

```text
  (Start)
      |
 / Read score /
      |
 < 0 to 100? >----No---->[ Display "Invalid" ]
      |
     Yes
      |
 < score >= 65? >--Yes-->[ Display "Pass" ]
      |
      No
      |
[ Display "Not yet" ]
      |
    (End)
```

Trace the diagram with `-1`, `64`, `65`, and `101`. Boundary testing matters because a single comparison symbol can change the result at exactly 65.

### Nested logic and loop tracing

```text
SET total = 0
FOR each price IN cart
    IF price > 0
        SET total = total + price
    END IF
END FOR
DISPLAY total
```

This example contains a loop with a branch inside it. For prices `10`, `-2`, and `5`, the displayed total is `15`. Trace the value of `total` after each pass instead of trying to solve the whole program mentally.

## 4.3 Explain the purpose and use of programming concepts

### Identifiers and containers

An **identifier** is a name assigned to a program element.

- A **variable** is named storage whose value may change: `score = 8`.
- A **constant** is intended not to change during normal execution: `TAX_RATE = 0.13`.
- An **array** stores an ordered collection, commonly fixed-size and same-type in foundational explanations.
- A **vector** is an ordered collection that commonly grows or shrinks dynamically.

Clear identifiers such as `failedLoginCount` communicate more than `x`. Avoid names that conflict with language keywords.

### Functions and objects

A **function** groups reusable instructions, may accept inputs called parameters, and may return a result.

An **object** bundles data with behavior. Its **properties/attributes** describe state; its **methods** are actions it can perform.

```text
Object: Printer
Property/attribute: status = "Ready"
Method: print(document)
```

Terminology varies by language: “property” and “attribute” can overlap, so use the definition provided by the language or scenario.

**Mini-scenario:** A shopping cart can use a vector because items may be added or removed. A `calculateTotal()` function can loop through those items. Each product object can have a `price` property and an `applyDiscount()` method.

### Validation and common mistakes

- Test normal values, boundary values, invalid input, and empty input.
- Trace variable values line by line.
- Confirm a loop changes the value used in its stop condition.
- Do not confuse syntax errors with incorrect logic. Code can run successfully and still calculate the wrong answer.
- Treat user input as untrusted; validate type, length, range, and format.

### Chapter 4 pocket checklist

- Classify interpreted, scripting/scripted, markup, compiled, query, and assembly languages.
- Turn a simple task into pseudocode or a flowchart sequence.
- Identify sequence, branching, and looping and test boundary conditions.
- Explain identifiers, variables, constants, arrays, vectors, functions, objects, properties/attributes, and methods.

### Chapter 4 review

1. Which category best describes SQL?
2. What logic structure chooses between “approved” and “denied”?
3. Why might a loop never stop?
4. In a `BankAccount` object, is `balance` more likely a property or a method?
5. What is the practical difference between a variable and a constant?

### Hands-on lab 4: design before coding

**Purpose:** Practice pseudocode, flowchart symbols, branching, boundary testing, and trace tables.  
**Time:** 20 minutes.  
**Requirements:** Paper or a text/diagram editor; no programming language is required.

Write pseudocode and draw a flowchart for a program that accepts a score from 0 to 100 and prints `Pass` for 65 or higher. It must reject values below 0 or above 100. Trace `-1`, `0`, `64`, `65`, `100`, and `101`.

**Model logic:**

```text
INPUT score
IF score < 0 OR score > 100
    DISPLAY "Invalid"
ELSE IF score >= 65
    DISPLAY "Pass"
ELSE
    DISPLAY "Not yet"
END IF
```

**Expected result:** `-1` and `101` are invalid; `0` and `64` do not pass; `65` and `100` pass. No loop is required.  
**Validation:** Your flowchart must have one start, one end, labeled decision exits, and a path for every test value.  
**Cleanup:** None. Keep the trace table for review.  
**Reflection:** What wrong result appears at 65 if the program uses `>` instead of `>=`?

#### Chapter 4 review answers

1. SQL is a query language.
2. Branching chooses between paths according to a condition.
3. A loop may never stop when its condition never becomes false, often because the controlling value is not updated.
4. `balance` is a property or attribute because it describes the object's state.
5. A variable may change during execution; a constant is intended to stay fixed.

---

<a id="chapter-5"></a>

# Chapter 5 — Database fundamentals (11%)

A database stores related data in a form that supports reliable retrieval and change. The database management system (DBMS) provides the rules, queries, access controls, and recovery features around that data.

## 5.1 Explain database concepts and the purpose of a database

Databases support four broad uses:

- **Create:** define a database and its structures.
- **Import/input:** bring in existing data or enter new records.
- **Query:** ask for matching data or calculate results.
- **Reports:** present selected information for people or systems.

### Flat file versus database

A **flat file** stores data in a simple file such as CSV. It is portable and useful for a small list or transfer. A database is better when rules, relationships, access controls, large volumes, or many users matter.

| Need | Flat file | Database |
|---|---|---|
| Multiple concurrent users | Conflicts are difficult to manage | DBMS can coordinate transactions and locking |
| Scalability | Good for small/simple data | Designed for larger or more complex workloads |
| Speed | Fast for simple sequential tasks | Indexes and queries can speed targeted work |
| Variety of data | Best with simple rows/columns | Can support many structures and types |
| Rules and relationships | Usually enforced manually | Constraints and schema can enforce them |

A **record** is a group of fields describing one item, such as one customer. **Storage** provides **data persistence**, meaning values survive after the application or computer stops. RAM alone does not provide persistence.

**Data is not information:** a table of transactions is data. A report showing monthly revenue by region is information produced from those records.

**Failure pattern:** duplicate customers appear because each clerk typed a name differently. Check whether the system uses a unique customer ID, validation rules, and a controlled entry process.

## 5.2 Compare and contrast various database structures

### Structured, semi-structured, and unstructured data

| Form | Shape | Example |
|---|---|---|
| Structured | Fixed fields and defined types | Customer table |
| Semi-structured | Labels/tags provide organization but records may vary | JSON or XML document |
| Unstructured | No predefined field model for the content | Free-form text, image, audio |

“Unstructured” does not mean useless or completely without metadata. A photo can have a date and owner even though its visual content does not fit ordinary table columns.

### Relational databases

A relational database uses a **schema** to define tables and rules.

- A **table** represents a category, such as customers.
- A **row/record** represents one instance.
- A **field/column** represents one attribute, such as email.
- A **primary key** uniquely identifies a row. It should be unique and not null.
- A **foreign key** refers to a key in another table and creates a relationship.
- A **constraint** enforces a rule, such as required values, uniqueness, valid relationships, or allowed ranges.

```text
Customers
CustomerID (primary key) | Name
101                      | Asha

Orders
OrderID (primary key) | CustomerID (foreign key) | Total
5001                  | 101                      | 45.00
```

The foreign key links order 5001 to Asha without repeating all customer details. A constraint can prevent an order from pointing to a customer that does not exist.

### Non-relational databases

- A **key/value database** retrieves a value by a unique key. It fits caches, sessions, and simple high-speed lookups.
- A **document database** stores flexible documents, commonly with nested fields. It fits records whose fields vary.

Non-relational does not mean “no structure,” and relational does not mean “old or slow.” Choose based on consistency needs, query patterns, relationships, scale, and operational skills. Some systems combine models.

## 5.3 Summarize methods used to interface with databases

### Relational methods

**Data manipulation** works with rows:

| Operation | SQL keyword | Result |
|---|---|---|
| Read matching data | `SELECT` | Returns rows/columns |
| Add a row | `INSERT` | Creates stored data |
| Change a row | `UPDATE` | Modifies stored data |
| Remove a row | `DELETE` | Removes matching data |

**Data definition** changes structures:

| Operation | SQL keyword | Result |
|---|---|---|
| Create structure | `CREATE` | Makes a table/database object |
| Change structure | `ALTER` | Modifies a definition |
| Remove structure | `DROP` | Deletes the object itself |

`DELETE` usually removes rows; `DROP` removes a database object such as a table. Both can be destructive. Verify the target, permissions, backup, transaction behavior, and test environment before change.

Database **permissions** determine who can read, insert, update, delete, define structures, or administer the system. Apply least privilege.

### Access methods

- **Direct/manual access:** a person enters commands through a database tool.
- **Programmatic access:** an application uses a driver, library, or API.
- **User interface/utility access:** forms and administration tools hide raw commands.
- **Query/report builders:** visual tools construct filters, grouping, and output.

Applications should use parameterized queries and protected credentials; joining user input directly into a command can enable injection attacks.

### Import, export, dumps, and backups

**Import/export** moves data between systems or formats. A **database dump** is an exported representation of data and often structure. A **backup** is a managed recovery copy. A dump can contribute to recovery, but a complete backup plan may also need logs, configuration, encryption keys, permissions, and tested restoration.

**Validate:** count records, inspect rejected rows, check character encoding and date formats, sample key fields, and confirm relationships. A successful import message does not prove the data is correct.

### Database mini-scenario

A club keeps members in a spreadsheet. Two people edit copies and overwrite each other's changes. Names are duplicated and payment reports disagree. A database can provide unique member IDs, concurrent access control, constraints, permissions, and consistent reports. It still needs good input rules, security, backups, and trained users.

### Chapter 5 pocket checklist

- Explain create, import/input, query, reports, records, storage, and persistence.
- Compare flat files and databases for users, scale, speed, and variety.
- Separate structured, semi-structured, and unstructured data.
- Identify schema, table, row, field, primary key, foreign key, and constraint.
- Compare relational, key/value, and document databases.
- Distinguish SELECT/INSERT/UPDATE/DELETE from CREATE/ALTER/DROP.
- Compare direct, programmatic, utility, and query-builder access.
- Separate export, database dump, and tested backup.

### Chapter 5 review

1. Which key uniquely identifies a table row?
2. Which SQL operation changes existing row values?
3. Why is a product image considered unstructured even when it has a file name and date?
4. What is the difference between `DELETE` and `DROP`?
5. Why might a database be safer than emailed spreadsheet copies for concurrent users?

### Hands-on lab 5: design a tiny relational database

**Purpose:** Apply tables, primary and foreign keys, constraints, and CRUD operations.  
**Time:** 25–35 minutes.  
**Requirements:** Paper or a spreadsheet. Use fictional names only.

On paper or in a spreadsheet, design `Students` and `Enrollments` tables. Give each a primary key and link enrollments to students with a foreign key. Add three sample students and four enrollments. Then write plain-English requests equivalent to:

- selecting every enrollment for one student;
- inserting a new enrollment;
- updating one course name;
- deleting one mistaken enrollment.

Explain which constraint would stop an enrollment for a nonexistent student.

**Model structure:**

```text
Students(StudentID PRIMARY KEY, StudentName)
Enrollments(EnrollmentID PRIMARY KEY,
            StudentID FOREIGN KEY REFERENCES Students(StudentID),
            CourseName)
```

**Expected result:** Each student and enrollment has a unique primary key; every enrollment's `StudentID` matches a Students row.  
**Validation:** Try to add an enrollment with a missing `StudentID`. A foreign-key constraint should reject it in a real relational DBMS with enforcement enabled.  
**Cleanup:** Delete fictional practice data if entered into a shared system.  
**Reflection:** Why is `StudentName` a poor primary key?

#### Chapter 5 review answers

1. A primary key uniquely identifies a row.
2. `UPDATE` changes existing row values.
3. The visual content does not follow a fixed field schema, although its metadata can be structured.
4. `DELETE` removes matching rows; `DROP` removes a database object such as a table.
5. A DBMS can coordinate concurrent writes, enforce constraints and permissions, and maintain one current data set.

---

<a id="chapter-6"></a>

# Chapter 6 — Security (20%)

Security protects people, systems, and information while allowing authorized work. No single setting removes all risk. Good security combines technology, behavior, policy, physical protection, monitoring, and recovery.

## 6.1 Summarize confidentiality, integrity, and availability concerns

The **CIA triad** describes three security goals:

- **Confidentiality:** only authorized people or systems can view data.
- **Integrity:** data remains accurate, complete, and protected from unauthorized change.
- **Availability:** authorized users can access systems and data when needed.

| Concern | Goal harmed | What happens |
|---|---|---|
| Snooping | Confidentiality | Someone observes private information |
| Eavesdropping | Confidentiality | Someone listens to communication |
| Wiretapping | Confidentiality | A communication line is intercepted |
| Social engineering | Often confidentiality; may affect all | A person is manipulated into revealing data or taking action |
| Dumpster diving | Confidentiality | Discarded information or devices are searched |
| Man-in-the-middle | Integrity/confidentiality | An attacker intercepts and may alter communication |
| Replay attack | Integrity/authenticity | A valid transmission is captured and reused |
| Impersonation | Integrity/confidentiality | An attacker pretends to be a trusted identity |
| Unauthorized alteration | Integrity | Data is changed without permission |
| Denial of service | Availability | Resources are overwhelmed or blocked |
| Power outage | Availability | Systems lose power |
| Hardware failure | Availability; possibly integrity | A component stops or corrupts operation |
| Destruction | Availability; possibly all | Equipment or data is deliberately or accidentally destroyed |
| Service outage | Availability | A required provider or application is down |

One event can affect several goals. Ransomware can block availability, alter integrity, and expose confidentiality. Identify the primary concern in the scenario, but keep the wider business impact in view.

## 6.2 Explain methods to secure devices and best practices

### Mobile and workstation controls

- Use supported **antivirus/anti-malware**, keep signatures/engines current, and investigate alerts.
- Enable the **host firewall** with appropriate rules.
- Change **default passwords** and enable device/account passwords.
- Apply **patches and updates** for the OS, applications, browsers, firmware, and supported devices.
- Use **safe browsing**: verify domains, treat downloads and warnings carefully, and avoid entering credentials after following unexpected links.

These controls reduce risk; they do not guarantee safety. Antivirus may miss a new threat. A firewall cannot stop a user from willingly uploading a confidential file. Patching can introduce compatibility problems, so organizations test and stage important changes while still addressing urgent risk.

### Software sources and removal

Validate software sources. Prefer the operating system's trusted store, the **original equipment manufacturer (OEM)** or developer website, or an approved organizational repository. Research the publisher, exact domain, signature, reviews, support status, and expected file. Third-party download sites may bundle unwanted or malicious software.

Remove:

- **unwanted software** the user did not intend to install;
- **unnecessary software** that expands attack surface and consumes resources;
- **malicious software** using approved isolation and remediation steps.

Do not delete suspicious files at random on a business computer. Disconnect or quarantine as policy requires, preserve evidence, notify the correct team, and follow the incident process.

### Quick secure-device baseline

1. Inventory the device and supported software.
2. Back up valuable data and test recovery.
3. Update the OS, apps, browser, firmware, and security tools.
4. Enable screen lock, strong authentication, firewall, and storage encryption where appropriate.
5. Remove unsupported or unused software.
6. Use a standard account for everyday work and an administrator role only when needed.
7. Review privacy, sharing, browser, and application permissions.
8. Verify with update status, a security scan, restart, and a normal-use test.

## 6.3 Summarize behavioral security concepts

### Expectations of privacy

Privacy expectations depend on the service, owner, policy, and audience. Use this table to separate the common environments in the objective.

| Environment | What may be recorded or exposed | Sensible behavior |
|---|---|---|
| Internet and social networking sites | Searches, posts, location, contacts, advertising identifiers, screenshots | Limit public details; review audience and privacy settings |
| Email | Sender, recipient, time, subject, message, attachments, forwarding and archival copies | Verify recipients; use approved protection for confidential content |
| File sharing | File contents, owner, link activity, versions, downloads and resharing | Grant minimum access; set expiration and review external users |
| Instant messaging | Messages, files, presence, device and retention history | Treat work chat as a business record when policy says so |
| Mobile applications | Contacts, camera, microphone, location, device identifiers and usage | Grant only necessary permissions; remove abandoned applications |
| Desktop software | Files opened, license identity, telemetry, local logs and crash reports | Review settings and organizational policy |
| Business software | Customer records, transactions, approvals and audit trails | Use authorized accounts and approved workflows |
| Corporate network | Connections, DNS requests, authentication events, device state and traffic metadata | Follow acceptable-use policy; do not assume personal activity is invisible |

Providers, recipients, administrators, employers, logs, backups, screenshots, legal processes, or attackers may retain or expose content. Deleting a local copy does not guarantee every copy has disappeared.

This does not mean users have no privacy rights. It means the technical ability to send or delete something does not control every copy or legal relationship. Read policy and local law.

### Written policies and procedures

Policies explain rules and intent; procedures explain how to perform tasks. Common examples cover acceptable use, passwords, remote access, incident reporting, data classification, retention, and disposal. When a request conflicts with policy, pause and escalate rather than quietly bypassing it.

### Handling confidential information

Protect passwords, personal information, customer information, and company-confidential information through approved storage, access, transmission, retention, and disposal.

**Before sharing:**

- Am I authorized?
- Is the recipient correct and verified?
- Is this the minimum necessary information?
- Is the channel approved and protected?
- Should the link expire or block resharing/download?
- Does policy require logging, consent, or a second approval?

**Mini-scenario:** A caller claims to be an executive and urgently requests a customer file. Seniority and urgency do not replace verification. Use the published contact path, confirm authority, share only what is approved, and report suspicious pressure.

## 6.4 Compare and contrast authentication, authorization, accounting, and non-repudiation concepts

These four ideas answer different questions.

| Concept | Question | Example |
|---|---|---|
| Authentication | Who are you? | Sign in with a password and hardware token |
| Authorization | What may you do? | A role permits viewing but not deleting records |
| Accounting | What happened? | Logs record sign-ins and changes |
| Non-repudiation | Can an action be credibly denied? | A signed record and receipt support proof |

Successful authentication does not imply broad authorization. A user is a person or account; a **role** is a set of job-related permissions that can be assigned to users.

### Authentication

- **Single-factor authentication** uses one factor.
- **Multifactor authentication (MFA)** uses factors from different categories, not merely two passwords.

| Factor idea | FC0-U61 examples |
|---|---|
| Something known | Password, PIN, security-question answer |
| Something possessed | One-time password device/app, software token, hardware token |
| Something inherent | Biometrics |
| Somewhere you are | Specific location |

A one-time password can be delivered or generated in different ways. Evaluate the actual system, not the label alone. Security questions often rely on discoverable information and should not be treated as strong proof.

**Single sign-on (SSO)** lets one authenticated session reach multiple approved applications. It improves usability and central control, but compromise or outage of the identity service can have broad impact.

### Authorization models

- **Permissions** grant actions on a resource.
- **Least privilege** grants only what is needed, for only as long as needed.
- **Role-based access** assigns permissions to job roles; user account types such as standard user and administrator are simple examples.
- **Rule-based access** evaluates system rules, such as time, network, or device state.
- **Mandatory access control (MAC)** uses centrally enforced labels/classifications; owners cannot freely change access.
- **Discretionary access control (DAC)** lets a resource owner grant access within policy.

Do not confuse mandatory access control with a MAC address; context matters.

### Accounting and non-repudiation

Accounting uses **logs**, tracking, and sometimes browser history to reconstruct activity. Logs need accurate time, protected storage, retention, and review. A log entry is evidence, not infallible truth.

Non-repudiation uses evidence such as video, biometrics, signatures, and receipts to support that an action occurred. Strength depends on identity proof, integrity, custody, and context. A typed name alone may be weak evidence.

## 6.5 Explain password best practices

- Prefer **length** and uniqueness; long passphrases are easier to remember and harder to guess.
- Apply the required **password complexity** without predictable substitutions such as `P@ssw0rd`.
- Do not **reuse passwords across sites**. One breached site should not unlock another.
- Use a reputable **password manager** to generate and store unique credentials. Protect it with a strong master password and MFA.
- **Password history** prevents immediate reuse of recent passwords.
- **Password expiration** policies force periodic changes. Follow the organization's policy, but change immediately after suspected exposure; forced frequent changes can lead to predictable choices.
- A **password reset process** must verify identity through a trusted path. Help-desk staff should resist urgency, impersonation, and attempts to redirect reset codes.

Never share a password through email or chat, store it in plain text, or approve an MFA prompt you did not initiate.

**First response to suspected compromise:** use a known-safe device and official site, change the affected password, end other sessions if possible, enable or repair MFA, review recovery details and activity, and report according to policy. Change reused passwords elsewhere to unique ones.

## 6.6 Explain common uses of encryption

**Plain text** is readable original data. **Cipher text** is the transformed unreadable result of encryption. A key is required to encrypt, decrypt, or both depending on the method.

### Data at rest

- **File-level encryption** protects selected files or folders.
- **Disk-level encryption** protects a volume or device when it is powered off and locked.
- **Mobile-device encryption** protects stored phone/tablet data, usually tied to device authentication.

Disk encryption is valuable for a lost laptop but does not stop an authorized, signed-in user or malware running in that session from reading accessible files.

### Data in transit

- Protected **email** can mean two different things. Transport encryption protects a connection between mail systems, while message-level encryption protects the content for the intended recipient. One does not guarantee the other.
- **HTTPS** encrypts browser-to-site traffic and authenticates the server through certificates.
- A **VPN** creates a protected tunnel between endpoints; traffic can still be exposed beyond the tunnel endpoint.
- A **mobile application** should use protected network connections, validate certificates, avoid placing secrets in URLs or logs, and protect authentication tokens.

### What encryption does not solve

| Situation | Why encryption is not enough |
|---|---|
| A user sends a protected file to the wrong recipient | The recipient has access, but authorization was wrong |
| Malware runs after a user unlocks an encrypted disk | The operating system can read the data for the signed-in session |
| A valid HTTPS site is fraudulent | Encryption protects the connection to that site; it does not make the business honest |
| A recovery key is lost | Strong encryption can make legitimate recovery impossible |
| Data is altered before encryption | Encryption protects transport or storage, not the original accuracy |

Encryption does not prove that the recipient is authorized, the endpoint is malware-free, or the information is correct. It must be paired with identity, permissions, endpoint security, and key management.

**Validation:** check for HTTPS and a valid certificate, verify VPN status and destination, confirm encryption is enabled before storing sensitive data, and protect recovery keys separately.

## 6.7 Explain business continuity concepts

Business continuity keeps critical work operating during disruption. Disaster recovery restores IT capabilities after serious interruption. Backups are one part of both—not the entire plan.

### Fault tolerance

- **Replication** maintains copies of data or services.
- **Redundancy** provides spare capacity or alternate components.
- **Data redundancy** uses additional copies or protected storage arrangements.
- **Network redundancy** provides alternate links, devices, or paths.
- **Power redundancy** uses equipment such as UPS units, generators, or duplicate power feeds.

Replication can copy corruption or malicious changes. Redundancy improves availability but does not automatically provide historical recovery.

### Backup considerations

Decide what to back up:

- files and critical data;
- databases using application-consistent methods;
- OS/system state or images where fast rebuild matters.

Decide where copies live:

- **locally** for fast restoration;
- in **cloud storage** for geographic separation and managed scale;
- **on-site** for speed and **off-site** for site disasters.

A strong plan uses more than one copy and keeps at least one sufficiently separate or offline. Encrypt sensitive backups, restrict access, monitor jobs, define retention, and test restoration. A green “backup completed” message is not proof that recovery works.

A **contingency plan** defines alternate people, processes, technology, communication, locations, and suppliers. Include contact information, authority, priorities, and decision points.

### Disaster recovery

1. **Data restoration:** recover clean, usable data from the selected point.
2. **Prioritization:** restore the most critical services first based on business needs and dependencies.
3. **Restoring access:** reconnect authorized users and verify permissions, security, applications, and data integrity.

**Mini-scenario:** A power event damages the office server. A UPS may have provided time for a clean shutdown, but it is not a long-duration generator. The team activates its contingency plan, restores identity and networking before the dependent application, restores the database from a tested off-site copy, verifies transactions, and documents the recovery.

### Chapter 6 pocket checklist

- Classify every listed concern under confidentiality, integrity, or availability.
- Apply device security without claiming one control removes business risk.
- Explain privacy expectations, policies/procedures, and handling of each confidential-data type.
- Separate authentication, authorization, accounting, and non-repudiation.
- Identify factor types, SSO, least privilege, roles, rules, MAC, and DAC.
- Apply password length, complexity, history, expiration, uniqueness, manager, and reset practices.
- Compare plain/cipher text and encryption at rest/in transit, including its limits.
- Explain replication, redundancy, backup choices, contingency, and disaster recovery.

### Chapter 6 review

1. A user signs in successfully but cannot open payroll. Is the immediate issue authentication or authorization?
2. Which CIA goal is most directly affected by an unauthorized edit?
3. Are a password and PIN together always MFA?
4. What does a host firewall do, and what does it not prove?
5. Why is a replicated database not automatically a historical backup?
6. What three disaster-recovery activities appear in FC0-U61?

### Hands-on lab 6: build a personal security and recovery baseline

Use a device you own or are authorized to manage.

**Purpose:** Verify basic device protection and prove that one file can be restored.  
**Time:** 25–40 minutes.  
**Requirements:** An authorized device, one non-sensitive test file, and an approved backup location. Do not expose passwords or recovery keys.

1. Confirm automatic OS and application updates.
2. Check screen-lock authentication, firewall status, and storage-encryption status. Do not expose recovery keys.
3. Review browser extensions and remove only those you recognize as unwanted or unnecessary.
4. Choose one non-sensitive file, make a backup copy in an approved separate location, rename the original, and restore the copy.
5. Record what was backed up, where it was stored, how it was restored, and what the successful test proves.
6. Identify one remaining risk that the settings and backup do not address.

**Expected result:** The device reports current protection status, and the restored file opens with the expected content.  
**Validation:** Compare the restored file's name, size, and content with the original. A successful one-file restore proves that test only; it does not prove full-system recovery.  
**Cleanup:** Remove unnecessary duplicate test files, safely disconnect removable storage, and secure your notes. Do not remove the only verified backup.  
**Reflection:** Which failure would still stop recovery—for example, lost credentials, an unavailable cloud account, corrupted backups, or no replacement device?

#### Chapter 6 review answers

1. Authorization is the immediate issue because identity was accepted but access was denied.
2. Unauthorized editing most directly affects integrity.
3. No. A password and PIN are both knowledge factors.
4. A host firewall filters traffic according to rules. It does not prove the device, user behavior, data, or wider business is secure.
5. Replication may immediately copy deletion, corruption, or malicious changes to every replica.
6. FC0-U61 lists data restoration, prioritization, and restoring access.

---

<a id="chapter-7"></a>

# Chapter 7 — Integrated practice

These activities use original scenarios based only on the published objectives. They are not recalled exam items.

> **Format note:** FC0-U61's published question type is multiple-choice. The following PBQ-style activities are untimed skills simulations for deeper learning; they do not represent an additional FC0-U61 item type.

## PBQ-style practice 1: office setup and fault isolation

### Scenario

A small office has a cable Internet service, a combined wireless router, three laptops, an IP printer, and cloud file storage. One laptop can print but cannot open websites. The other laptops work normally. The affected laptop shows that it is connected to Wi-Fi.

### Your tasks

1. Place these checks in a sensible order:
   - replace the wireless router;
   - test a known-good website;
   - record the laptop's IP address, gateway, and DNS settings;
   - ask what changed;
   - compare its settings with a working laptop;
   - document the fix and verification.
2. Identify what successful printing proves.
3. Choose the most likely layer to investigate first: Internet provider, local client settings, or printer hardware.
4. State one safe validation after the repair.

## PBQ-style practice 2: access and data handling

### Scenario

Sam signs in to a customer application with a password and fingerprint. Sam can view customer records but cannot delete them. A log records every view and edit. Sam exports a customer file to a personal cloud drive to work from home.

### Your tasks

Match each observation to the best concept: authentication, authorization, accounting, MFA, or policy/confidentiality failure.

| Observation | Concept |
|---|---|
| Password plus fingerprint | ? |
| Allowed to view but not delete | ? |
| Sign-in establishes identity | ? |
| Audit log records actions | ? |
| Personal cloud export | ? |

## PBQ-style practice 3: application and database design

### Scenario

A school wants an online system. Students use a browser, an application service applies enrollment rules, and a database stores students and courses. Each student has a unique ID. Enrollments link a student to a course.

### Your tasks

1. Identify the architecture model.
2. Name the student-table key and the enrollment-table reference.
3. Choose `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, or `DROP` for each action:
   - list a student's courses;
   - add an enrollment;
   - correct a course title;
   - define the initial Students table;
   - remove a mistaken enrollment row.
4. State one availability control and one confidentiality control.

## PBQ-style model responses

### Practice 1

Ask what changed; test a known-good site and note the exact symptom; record IP, gateway, and DNS settings; compare them with a working laptop; form and test a client-setting theory; replace infrastructure only if evidence supports it; verify browsing, printing, and reconnection; document the result. Successful printing proves that the laptop has at least some local network connectivity to the printer. Because other laptops reach the Internet, start with the affected client's DNS, proxy, browser, or network settings.

### Practice 2

Password plus fingerprint is MFA because it combines knowledge and biometric factors. Sign-in is authentication. View-but-not-delete is authorization and likely role-based least privilege. Logs provide accounting. The personal export can breach policy and confidentiality even though Sam had legitimate access inside the application. Authorization to view is not authorization to copy data to an unapproved location.

### Practice 3

The browser, application logic, and database form a three-tier model. `StudentID` is the Students table's primary key; its use in Enrollments is a foreign key. Use `SELECT`, `INSERT`, `UPDATE`, `CREATE`, and `DELETE` in the order listed. Availability controls include tested backups, redundancy, and a contingency plan. Confidentiality controls include HTTPS, appropriate permissions, MFA, and storage encryption. A real design should use several layers.

## Mixed review questions

1. What is decimal 10 in binary?
2. Is a MAC address a user identity?
3. Which is volatile: RAM or SSD?
4. Which protocol normally sends outgoing email?
5. What device connects wireless clients to a wired network?
6. What is the first broad troubleshooting step?
7. Which file-system feature records intended changes to aid recovery after interruption?
8. What is the difference between locally installed and local-network-hosted software?
9. Which browser feature stores local copies to speed repeat loading?
10. Is a product key the same as ownership of source code?
11. Which logic structure repeats instructions?
12. Which container commonly changes size dynamically: array or vector?
13. What does a foreign key do?
14. Which command reads rows: `SELECT` or `ALTER`?
15. Is a database dump always a complete, tested recovery plan?
16. Which CIA goal does a power outage affect most directly?
17. What principle gives a user only the access required for the job?
18. Are two different passwords two-factor authentication?
19. What state of data does HTTPS protect?
20. What closing troubleshooting record helps others solve a repeat incident?

### Mixed review answers

1. `1010`.
2. No. It identifies a network interface at the local link layer and can be spoofed.
3. RAM.
4. SMTP.
5. Access point.
6. Identify the problem.
7. Journaling.
8. A local application exists on the client and can perform core work without a network; a local-network-hosted service depends on the organization's network but may not need the Internet.
9. Cache.
10. No. A key supports licensing/activation; rights are defined by the license.
11. Looping.
12. Vector, in the foundational distinction used by the objective.
13. It references a key in another table to form and enforce a relationship.
14. `SELECT`.
15. No. Recovery may require logs, configuration, keys, permissions, retention, and a verified restore.
16. Availability.
17. Least privilege.
18. No. They are both knowledge factors.
19. Data in transit between the browser and site endpoint.
20. Documentation of findings, actions, outcome, and lessons learned.

---

<a id="chapter-8"></a>

# Chapter 8 — Rapid review

## Rapid concept map

| If the question mentions… | Think… |
|---|---|
| `0` and `1` | Binary |
| `A` through `F` as digits | Hexadecimal |
| Garbled international text | Unicode/encoding |
| Leading zeros or text-like numbers | String |
| Temporary work area | RAM, volatile |
| Retained files | Non-volatile storage |
| File capacity | Bytes: KB/MB/GB/TB/PB |
| Link rate | Bits per second: Kbps/Mbps/Gbps |
| CPU clock | MHz/GHz, not a complete performance comparison |
| Names fail but IP works | DNS |
| Local vs. remote networks | LAN vs. WAN |
| Local hardware address | MAC address |
| Logical routed address | IP address |
| Web encryption | HTTPS/certificate |
| Sending mail | SMTP |
| Syncing mail | IMAP |
| Download-focused mail | POP3 |
| Background function | Service |
| Running program instance | Process |
| Hardware communication | Driver |
| Repeated code | Loop |
| Choice based on condition | Branch |
| Unique row | Primary key |
| Relationship between tables | Foreign key |
| Read/add/change/remove rows | SELECT/INSERT/UPDATE/DELETE |
| Define/change/remove structures | CREATE/ALTER/DROP |
| “Who are you?” | Authentication |
| “What may you do?” | Authorization |
| “What happened?” | Accounting/logs |
| “Can you deny it?” | Non-repudiation |
| Unauthorized reading | Confidentiality |
| Unauthorized changing | Integrity |
| Cannot reach service | Availability |
| Stored data protection | Encryption at rest |
| Moving data protection | Encryption in transit |
| Fast failover copies | Replication/redundancy |
| Historical recovery | Backup and tested restore |

## High-yield comparisons

- **Hardware vs. software:** hardware is physical equipment; software is instructions and data. Firmware is software stored close to hardware.
- **Data vs. information:** data is recorded raw material; information is data interpreted in context.
- **User vs. role:** a user/account represents an identity; a role groups permissions for a job or function.
- **Authentication vs. authorization:** authentication proves identity; authorization permits actions.
- **Security setting vs. business risk:** a control lowers a particular risk. Overall risk also depends on assets, threats, vulnerabilities, people, process, impact, and recovery.
- **RAM vs. storage:** RAM is fast, working, and volatile; storage is persistent.
- **Internet vs. Wi-Fi:** Wi-Fi is a local wireless connection. Internet service is connectivity beyond the local network. Either can fail independently.
- **Router vs. switch vs. access point:** router joins networks; switch joins wired LAN devices; access point joins wireless clients to a network.
- **Encryption vs. access control:** encryption makes data unreadable without a key; access control decides which authenticated identities may act.
- **Sync/replication vs. backup:** sync and replication improve currency or availability; backups provide recoverable points and separation.

## Troubleshooting in eight verbs

**Identify → Research → Theorize → Test → Plan → Implement/escalate → Verify → Document**

At every stage: protect data, change one thing at a time, know your authority, and plan a rollback.

## Wireless memory line

For the standards named by FC0-U61: **a** is older 5 GHz; **b/g** use 2.4 GHz; **n** can use 2.4 or 5 GHz; **ac** is associated with 5 GHz. Prefer WPA2 over WPA; avoid WEP and open networks for private use.

## Database memory line

**Table → row → field. Primary identifies; foreign relates; constraint protects a rule. SELECT reads, INSERT adds, UPDATE changes, DELETE removes rows. CREATE builds, ALTER changes, DROP removes structure.**

## Security memory line

**CIA protects secrecy, correctness, and access. AAA checks identity, permission, and activity. Non-repudiation supports proof. Encrypt stored and moving data. Back up, separate, restore, verify.**

---

<a id="chapter-9"></a>

# Chapter 9 — High-yield acronyms

| Acronym | Meaning | Pocket cue |
|---|---|---|
| ACL | Access control list | Permissions attached to a resource |
| ARM | Advanced RISC Machines | Processor architecture common in mobile devices |
| ASCII | American Standard Code for Information Interchange | Limited character representation |
| BIOS | Basic Input/Output System | Firmware that starts hardware/boot |
| CPU | Central processing unit | Executes instructions |
| CRUD | Create, read, update, delete | Common data operations |
| DAC | Discretionary access control | Owner can grant access within policy |
| DDL | Data definition language | CREATE, ALTER, DROP |
| DML | Data manipulation language | SELECT, INSERT, UPDATE, DELETE |
| DNS | Domain Name System | Name-to-IP resolution |
| DoS | Denial of service | Availability attack |
| DSL | Digital subscriber line | Internet service over telephone copper |
| DVI | Digital Visual Interface | Display connector |
| FAT32 | File Allocation Table 32 | Compatible file system with 4 GB file limit |
| GHz | Gigahertz | Billions of cycles per second |
| GPU | Graphics processing unit | Graphics/parallel processing |
| GUI | Graphical user interface | Windows, icons, menus, pointer/touch |
| HDD | Hard disk drive | Spinning non-volatile storage |
| HDMI | High-Definition Multimedia Interface | Digital video and audio |
| HTTP | Hypertext Transfer Protocol | Web transfer without TLS protection |
| HTTPS | Hypertext Transfer Protocol Secure | Protected web traffic |
| IMAP | Internet Message Access Protocol | Email synchronization |
| IoT | Internet of Things | Connected purpose-built devices |
| IP | Internet Protocol | Logical network addressing/routing |
| ISP | Internet service provider | Provides Internet access |
| LAN | Local area network | Limited local network |
| MAC | Media access control | Local interface address; also contextually access-control model |
| MFA | Multifactor authentication | Different factor categories |
| MHz | Megahertz | Millions of cycles per second |
| NAS | Network-attached storage | Shared storage appliance on a LAN |
| NFC | Near-field communication | Very short-range wireless |
| NIC | Network interface card | Wired or wireless network hardware |
| NTFS | New Technology File System | Windows file system with modern features |
| OEM | Original equipment manufacturer | Trusted device-maker source |
| OS | Operating system | Manages hardware and applications |
| PB | Petabyte | Storage-capacity unit |
| PIN | Personal identification number | Knowledge authentication factor |
| POP3 | Post Office Protocol version 3 | Download-oriented email retrieval |
| RAM | Random access memory | Volatile working memory |
| RF | Radio frequency | Wireless signaling |
| RJ-11 | Registered Jack 11 | Telephone connector |
| RJ-45 | Registered Jack 45 | Common Ethernet connector term |
| SMTP | Simple Mail Transfer Protocol | Sends/relays email |
| SQL | Structured Query Language | Relational database language |
| SSD | Solid-state drive | Fast non-volatile storage |
| SSID | Service set identifier | Wi-Fi network name |
| SSO | Single sign-on | One identity session for multiple apps |
| TB | Terabyte | Storage-capacity unit |
| TLS | Transport Layer Security | Protects data in transit, including HTTPS |
| UPS | Uninterruptible power supply | Temporary power and clean shutdown support |
| URL | Uniform resource locator | Address of a web resource |
| USB | Universal Serial Bus | Common peripheral/data/power interface |
| VGA | Video Graphics Array | Older analog display interface |
| VPN | Virtual private network | Protected tunnel between endpoints |
| WAN | Wide area network | Connects networks over distance |
| WEP | Wired Equivalent Privacy | Obsolete, weak Wi-Fi security |
| WPA | Wi-Fi Protected Access | Older Wi-Fi security |
| WPA2 | Wi-Fi Protected Access 2 | Stronger FC0-U61-listed Wi-Fi choice |

Uppercase and lowercase matter in units: `MB` is megabytes; `Mb` is megabits. Acronyms can have different meanings by context. `MAC` can mean Media Access Control in networking or mandatory access control in authorization.

---

<a id="chapter-10"></a>

# Chapter 10 — Timed 75-question readiness assessment

These original questions measure the published objectives. They are not recalled exam items and do not predict a CompTIA scaled score.

**Instructions:** Allow 60 minutes. Choose one best answer for each question. Do not use notes. Mark uncertain answers and review them after scoring.

## Domain 1: IT concepts and terminology

1. Which notation uses only `0` and `1`?
   - A. Decimal
   - B. Binary
   - C. Hexadecimal
   - D. Unicode
2. What is decimal 15 in hexadecimal?
   - A. `E`
   - B. `F`
   - C. `10`
   - D. `1111`
3. Which standard is designed to represent characters from many writing systems?
   - A. ASCII
   - B. BIOS
   - C. Unicode
   - D. Boolean
4. Which type best stores the employee identifier `00127`?
   - A. Integer
   - B. Float
   - C. Boolean
   - D. String
5. Which type stores `true` or `false`?
   - A. Boolean
   - B. Character
   - C. Float
   - D. String
6. A scanner reads a barcode. Which computing function is this?
   - A. Input
   - B. Processing
   - C. Output
   - D. Storage
7. Sales records are grouped by region and summarized for managers. What has been created?
   - A. Raw data only
   - B. Meaningful information
   - C. Firmware
   - D. A patent
8. Which protection most directly applies to an original software manual?
   - A. Copyright
   - B. Trademark
   - C. Password history
   - D. Patent automatically
9. Which unit normally describes network throughput?
   - A. GB
   - B. GHz
   - C. Mbps
   - D. PB
10. How many bits are in one byte?
   - A. 2
   - B. 4
   - C. 8
   - D. 16
11. A 16 MB file contains approximately how many megabits?
   - A. 2 Mb
   - B. 16 Mb
   - C. 64 Mb
   - D. 128 Mb
12. What should a troubleshooter do immediately after establishing a probable cause?
   - A. Document the final outcome
   - B. Test the theory
   - C. Replace the computer
   - D. Implement preventive measures
13. A tested theory is wrong. What is the best next step?
   - A. Repeat the same change
   - B. Declare the repair complete
   - C. Establish a new theory or escalate
   - D. Delete the logs

## Domain 2: Infrastructure

14. Which connector is commonly associated with Ethernet?
   - A. RJ-11
   - B. RJ-45
   - C. VGA
   - D. DVI
15. Which technology is designed for very short-range tap interactions?
   - A. NFC
   - B. DSL
   - C. SATA
   - D. VGA
16. Which display interface is analog?
   - A. HDMI
   - B. DisplayPort
   - C. VGA
   - D. Mini DisplayPort
17. A newly connected printer is not automatically detected. What should be checked next?
   - A. Install a trusted compatible driver
   - B. Format the computer
   - C. Disable the firewall permanently
   - D. Replace the motherboard
18. Which component executes program instructions?
   - A. RAM
   - B. CPU
   - C. NIC
   - D. SSD
19. Which component provides volatile working memory?
   - A. HDD
   - B. Optical disc
   - C. RAM
   - D. Flash drive
20. A computer shuts down during heavy work and feels unusually hot. What should be checked first?
   - A. Cooling, vents, and fans
   - B. Email settings
   - C. File extension
   - D. Printer queue
21. Which Internet service commonly uses existing telephone copper and loses performance with distance?
   - A. Fiber
   - B. DSL
   - C. Satellite
   - D. Cellular
22. Which storage device has moving internal parts?
   - A. SSD
   - B. RAM
   - C. HDD
   - D. Flash drive
23. Which system is designed primarily to provide resources to other computers?
   - A. Server
   - B. Tablet
   - C. Gaming console
   - D. Thermostat
24. What service translates a host name into an IP address?
   - A. SMTP
   - B. DNS
   - C. IMAP
   - D. HTTPS
25. Which address is used as a logical address for routing between networks?
   - A. IP address
   - B. Product key
   - C. File extension
   - D. SSID
26. Which protocol normally sends or relays email?
   - A. POP3
   - B. IMAP
   - C. SMTP
   - D. HTTP
27. Which device forwards frames between wired devices on the same LAN?
   - A. Switch
   - B. Modem
   - C. UPS
   - D. Scanner
28. Which listed wireless standard has an 11 Mbps theoretical maximum?
   - A. 802.11a
   - B. 802.11b
   - C. 802.11g
   - D. 802.11n
29. Which FC0-U61-listed Wi-Fi protection should be preferred?
   - A. Open
   - B. WEP
   - C. WPA
   - D. WPA2

## Domain 3: Applications and software

30. What is the operating system's main relationship to applications and hardware?
   - A. It replaces every application
   - B. It provides managed access to hardware resources
   - C. It acts only as permanent storage
   - D. It is a network cable
31. A program stops responding. Which OS function can end its running instance?
   - A. Process management
   - B. Trademark management
   - C. DNS resolution
   - D. Disk encryption only
32. Which OS type runs directly on hardware to host virtual machines?
   - A. Mobile OS
   - B. Type 1 hypervisor
   - C. Word processor
   - D. Embedded document
33. Which file system has an individual-file limit of about 4 GB?
   - A. NTFS
   - B. ext4
   - C. FAT32
   - D. HFS
34. Which file-system feature records intended changes to aid consistency after interruption?
   - A. Journaling
   - B. Private browsing
   - C. Product activation
   - D. Packet switching
35. What lets an operating system control a specific hardware device?
   - A. Driver
   - B. Report builder
   - C. Patent
   - D. Cookie
36. Which software is best for calculations arranged in rows and columns?
   - A. Presentation software
   - B. Spreadsheet software
   - C. Instant messaging
   - D. Diagramming software
37. Which tool is designed to track tasks, dates, dependencies, and resources?
   - A. Project-management software
   - B. Firmware
   - C. Device driver
   - D. File system
38. A program and its working files remain on one laptop and core use requires no network. Which delivery method fits?
   - A. Locally installed
   - B. Local-network hosted
   - C. Cloud hosted
   - D. Three-tier only
39. A browser talks to an application server, which talks to a database. Which model is this?
   - A. One-tier
   - B. Two-tier
   - C. Three-tier
   - D. No-tier
40. A site shows an old image after the server copy changed. What is a sensible browser check?
   - A. Clear the relevant cache
   - B. Replace the CPU
   - C. Format the disk
   - D. Change the SSID
41. What does private browsing primarily reduce?
   - A. All monitoring by a network owner
   - B. Local retention of selected session history
   - C. The website's ability to receive traffic
   - D. Internet service charges
42. A company allows only 25 people to run an application at the same time. What license model is this?
   - A. Concurrent
   - B. Single-use
   - C. Trademark
   - D. Public domain automatically
43. Which statement about open-source software is correct?
   - A. It has no license
   - B. It is automatically secure
   - C. Its license defines rights to use, modify, and redistribute it
   - D. It cannot be sold

## Domain 4: Software development concepts

44. Which category best describes HTML?
   - A. Assembly language
   - B. Markup language
   - C. Query language
   - D. Machine firmware
45. Which category best describes SQL?
   - A. Query language
   - B. Display interface
   - C. File system
   - D. Wireless protocol
46. Which category is closest to processor instructions?
   - A. Markup
   - B. Assembly
   - C. Spreadsheet formula
   - D. CSS only
47. What is pseudocode?
   - A. Encrypted source code
   - B. Language-neutral description of program logic
   - C. A database backup
   - D. A compiled executable
48. Which flowchart shape normally represents a decision?
   - A. Diamond
   - B. Rectangle
   - C. Arrow
   - D. Oval
49. Which structure repeats a group of instructions?
   - A. Sequence
   - B. Loop
   - C. Constant
   - D. Property
50. What is likely to cause an infinite loop?
   - A. The stop condition never becomes false
   - B. A constant stays fixed as designed
   - C. A function returns a result
   - D. An array contains values
51. Which named value is intended to change during execution?
   - A. Constant
   - B. Variable
   - C. Method
   - D. Attribute only
52. In an object, what is a method?
   - A. An action the object can perform
   - B. A network address
   - C. A storage unit
   - D. A database row

## Domain 5: Database fundamentals

53. Why is a database generally better than emailed spreadsheet copies for concurrent users?
   - A. It removes the need for permissions
   - B. It can coordinate writes and enforce rules centrally
   - C. It makes every report correct automatically
   - D. It never needs backups
54. What provides data persistence?
   - A. Storage that retains data after the application stops
   - B. CPU cache only
   - C. A screen display
   - D. A Boolean value
55. Which data is semi-structured?
   - A. A fixed relational table
   - B. A JSON document with labeled fields that may vary
   - C. An untagged photograph only
   - D. A CPU instruction
56. Which key uniquely identifies a row?
   - A. Foreign key
   - B. Primary key
   - C. Encryption key
   - D. Product key
57. What does a foreign key do?
   - A. Defines Wi-Fi encryption
   - B. Refers to a key in another table
   - C. Replaces every constraint
   - D. Compresses a database
58. Which operation adds a new row?
   - A. SELECT
   - B. INSERT
   - C. ALTER
   - D. DROP
59. Which command changes a table definition?
   - A. UPDATE
   - B. DELETE
   - C. ALTER
   - D. SELECT
60. Which statement about a database dump is correct?
   - A. It automatically proves full recovery
   - B. It can support recovery but may not contain every required component
   - C. It cannot contain structure
   - D. It is always identical to replication

## Domain 6: Security

61. Which CIA goal prevents unauthorized disclosure?
   - A. Confidentiality
   - B. Integrity
   - C. Availability
   - D. Accounting
62. Which event most directly harms integrity?
   - A. Unauthorized alteration
   - B. Power outage
   - C. Full disk
   - D. Lost Internet service only
63. Which event most directly harms availability?
   - A. Denial of service
   - B. Strong encryption
   - C. Copyright
   - D. File naming
64. A caller pressures an employee to reveal a password. What is this?
   - A. Social engineering
   - B. Journaling
   - C. Replication
   - D. Compression
65. Where should a user obtain a device driver?
   - A. An unverified download mirror
   - B. The OEM, OS service, or approved repository
   - C. An unexpected email attachment
   - D. A random advertisement
66. What question does authentication answer?
   - A. What happened?
   - B. Who are you?
   - C. What may you do?
   - D. Which backup is newest?
67. A signed-in user may view but not delete records. What controls this?
   - A. Authorization
   - B. Authentication only
   - C. Compression
   - D. DNS
68. Which pair is multifactor authentication?
   - A. Password and PIN
   - B. Two passwords
   - C. Password and fingerprint
   - D. PIN and security question
69. What is least privilege?
   - A. Giving every user administrator access
   - B. Granting only the access needed for assigned work
   - C. Removing all logs
   - D. Sharing one account
70. Which control records sign-ins and changes for later review?
   - A. Accounting logs
   - B. Encryption only
   - C. A trademark
   - D. An SSD
71. Which password practice limits damage when one website is breached?
   - A. Reuse the same password everywhere
   - B. Use unique passwords for different sites
   - C. Email passwords to yourself
   - D. Approve every MFA prompt
72. What does disk-level encryption primarily protect?
   - A. Data on a powered-off, locked device
   - B. A signed-in session from all malware
   - C. Data accuracy before encryption
   - D. Availability during a power outage
73. What does HTTPS primarily protect?
   - A. Data in transit between the client and site endpoint
   - B. Every copy stored by the recipient
   - C. The honesty of every website
   - D. A laptop from theft
74. Why is replication not automatically a historical backup?
   - A. It may quickly copy deletion or corruption
   - B. It never uses storage
   - C. It prevents availability
   - D. It cannot copy data
75. What should happen before an organization trusts its backup process?
   - A. Delete the original data
   - B. Test restoration and verify usable results
   - C. Disable access controls
   - D. Store every copy in one location

## Readiness rubric

| Correct answers | Interpretation | Next action |
|---:|---|---|
| 68–75 | Strong command of this guide | Review missed objectives and repeat under time |
| 60–67 | Nearly ready | Repair two or three weak domains, then retest |
| 50–59 | Important gaps remain | Re-study missed objectives and repeat labs |
| Below 50 | Foundation needs rebuilding | Work through all six chapters before retesting |

This rubric is an instructional benchmark, not a conversion to CompTIA's scaled score.

---

<a id="chapter-11"></a>

# Chapter 11 — Assessment answer key and rationales

1. **B.** Binary uses two symbols: `0` and `1`.
2. **B.** Decimal 15 is hexadecimal `F`; binary `1111` represents the same value.
3. **C.** Unicode represents characters from many languages and symbol sets.
4. **D.** A string preserves leading zeros and is not intended for arithmetic.
5. **A.** Boolean values represent two logical states.
6. **A.** The scanner supplies data to the system.
7. **B.** Organized, contextualized data becomes useful information.
8. **A.** Copyright protects original expression such as written manuals.
9. **C.** Mbps is a bit-per-second throughput unit.
10. **C.** One byte contains eight bits.
11. **D.** Multiply 16 megabytes by eight to obtain 128 megabits.
12. **B.** A probable-cause theory must be tested before planning the confirmed fix.
13. **C.** An unconfirmed theory requires a new theory or escalation.
14. **B.** RJ-45 is the common exam term for an Ethernet connector.
15. **A.** NFC works over very short distances for tap interactions.
16. **C.** VGA carries an analog display signal.
17. **A.** After basic power and connection checks, use a trusted compatible driver when plug-and-play fails.
18. **B.** The CPU executes program instructions.
19. **C.** RAM is volatile working memory.
20. **A.** Heat and load-related shutdowns point first to airflow, vents, fans, and cooling.
21. **B.** DSL commonly uses telephone copper and is sensitive to line distance and quality.
22. **C.** A conventional HDD has spinning platters and moving heads.
23. **A.** A server provides services or resources to client systems.
24. **B.** DNS resolves a host name to an IP address.
25. **A.** Routers use logical IP addressing to forward packets between networks.
26. **C.** SMTP sends and relays email.
27. **A.** A switch forwards frames within a wired LAN.
28. **B.** 802.11b has an 11 Mbps theoretical maximum.
29. **D.** WPA2 is the strongest protection explicitly listed in FC0-U61.
30. **B.** The OS manages hardware and exposes controlled services to applications.
31. **A.** Process management can end a running program instance.
32. **B.** A Type 1 hypervisor runs directly on hardware.
33. **C.** FAT32 cannot store one file larger than about 4 GB.
34. **A.** Journaling records planned file-system changes to aid consistency recovery.
35. **A.** A driver lets the OS control a hardware device.
36. **B.** Spreadsheets are designed for tabular calculations and analysis.
37. **A.** Project-management software tracks work, dates, dependencies, and resources.
38. **A.** Locally installed software exists on the device and can perform core work without a network.
39. **C.** Presentation, application, and data layers form a three-tier model.
40. **A.** A stale cached copy can be removed so the browser requests current content.
41. **B.** Private browsing primarily limits selected local history and cookies after the session.
42. **A.** Concurrent licensing limits simultaneous use.
43. **C.** Open-source rights and duties come from the applicable license.
44. **B.** HTML is a markup language.
45. **A.** SQL is used to define, query, and manipulate relational data.
46. **B.** Assembly maps closely to processor instructions.
47. **B.** Pseudocode describes logic without requiring a specific programming language.
48. **A.** A diamond normally represents a decision.
49. **B.** A loop repeats instructions.
50. **A.** A loop continues forever if its stop condition never becomes false.
51. **B.** A variable is intended to hold a value that can change.
52. **A.** A method defines behavior or an action associated with an object.
53. **B.** A DBMS can coordinate concurrent changes and enforce central rules.
54. **A.** Persistent storage retains data after the program or system stops.
55. **B.** JSON has labeled structure while allowing records to vary.
56. **B.** A primary key uniquely identifies a table row.
57. **B.** A foreign key refers to a key in another table and forms a relationship.
58. **B.** `INSERT` adds a row.
59. **C.** `ALTER` changes an existing database-object definition.
60. **B.** A dump can aid recovery but may omit logs, settings, keys, or other required components.
61. **A.** Confidentiality prevents unauthorized disclosure.
62. **A.** Unauthorized change directly harms integrity.
63. **A.** Denial of service blocks authorized access and harms availability.
64. **A.** Social engineering manipulates a person into revealing information or taking unsafe action.
65. **B.** Trusted OEM, operating-system, or approved organizational sources reduce tampering and compatibility risk.
66. **B.** Authentication establishes identity.
67. **A.** Authorization determines permitted actions after identity is established.
68. **C.** A password is a knowledge factor and a fingerprint is an inherence factor.
69. **B.** Least privilege limits access to what the user needs for assigned work.
70. **A.** Accounting uses logs and tracking to record activity.
71. **B.** Unique passwords keep one site's compromise from directly unlocking another.
72. **A.** Disk encryption protects stored data when the device is powered off and locked.
73. **A.** HTTPS protects data moving between the client and the HTTPS endpoint.
74. **A.** Replication may copy an unwanted change before anyone notices it.
75. **B.** Only a tested, verified restoration demonstrates that backup data is usable.

---

<a id="chapter-12"></a>

# Chapter 12 — Final objective-coverage checklist

Use this list twice: once to find weak areas and once after final review. Mark an item only when you can explain it in your own words and solve a simple scenario.

## Domain 1.0 — IT concepts and terminology (17%)

- [ ] **1.1** Binary, hexadecimal, decimal; ASCII and Unicode data representation
- [ ] **1.2** Char, strings, integers, floats, and Boolean values
- [ ] **1.3** Input, processing, output, and storage
- [ ] **1.4** Data/information as assets; security investment; data-to-information; trademarks, copyright, patents; digital products; capture/collection, correlation, and meaningful reporting
- [ ] **1.5** Bit, byte, KB, MB, GB, TB, PB; bps, Kbps, Mbps, Gbps, Tbps; MHz and GHz
- [ ] **1.6** Identify, research, theorize, test, plan, implement/escalate, verify/prevent, and document—including every listed sub-step

## Domain 2.0 — Infrastructure (22%)

- [ ] **2.1** Wired RJ-11/RJ-45; wireless Bluetooth/NFC; USB, FireWire, Thunderbolt, Bluetooth, RF; VGA, HDMI, DVI, DisplayPort, Mini DisplayPort
- [ ] **2.2** Printer, scanner, keyboard, mouse, camera, external hard drive, speakers, and display; plug-and-play/driver installation; other steps; IP peripherals and web configuration
- [ ] **2.3** Motherboard, firmware/BIOS, RAM, CPU (ARM, 32-bit, 64-bit and device associations), HDD/SSD, GPU, cooling, and wired/wireless/on-board/add-on NICs
- [ ] **2.4** Fiber optic, cable, DSL, RF, satellite, and cellular Internet services
- [ ] **2.5** Volatile/non-volatile; RAM, solid-state/spinning disk, optical, flash; NAS, file server, cloud storage
- [ ] **2.6** Phones, tablets, laptops, workstations, servers, consoles; IoT appliances, automation, thermostats, security systems, cars, IP cameras, streaming devices, and medical devices
- [ ] **2.7** Packets; DNS URL-to-IP translation; LAN/WAN; IP/MAC addresses; HTTP/S, POP3, IMAP, SMTP; modem, router, switch, access point, firewall
- [ ] **2.8** 802.11a/b/g/n/ac age, speeds, interference/attenuation; SSID/default password; open, captive portal, WEP, WPA, WPA2

## Domain 3.0 — Applications and software (18%)

- [ ] **3.1** OS as application/hardware interface; disk, process/scheduling, application, memory, device, access management; kill/end task; mobile, workstation, server, embedded/firmware, Type 1 hypervisor
- [ ] **3.2** NTFS, FAT32, HFS, ext4; compression, encryption, permissions, journaling, limitations, naming; folders, types/extensions; services, processes, drivers, utilities/task scheduling; console/command line and GUI
- [ ] **3.3** Word processing, spreadsheet, presentation, browser, diagramming; email, conferencing, messaging, workspace, sharing; database, project, business-specific, and accounting software
- [ ] **3.4** Locally installed, local network hosted, cloud hosted and their network/file implications; one-, two-, three-, and n-tier architecture
- [ ] **3.5** Cache, scripting, add-ons, private browsing, proxy, valid/invalid certificates, popup/script blockers, and compatible browsers
- [ ] **3.6** Single/cross-platform compatibility; single, group/site, concurrent, open-source/proprietary, subscription/one-time licenses; product keys; instructions, agreements, and advanced install options

## Domain 4.0 — Software development concepts (12%)

- [ ] **4.1** Interpreted, scripting/scripted, markup, compiled, query, and assembly languages
- [ ] **4.2** Pseudocode, flowcharts, sequence, branching, and looping
- [ ] **4.3** Identifiers; variables/constants; arrays/vectors; functions; objects, properties, attributes, and methods

## Domain 5.0 — Database fundamentals (11%)

- [ ] **5.1** Create, import/input, query, reports; flat file/database concurrency, scale, speed, variety; records, storage, persistence
- [ ] **5.2** Structured/semi-structured/unstructured; schema, tables, rows, fields, primary/foreign keys, constraints; key/value and document databases
- [ ] **5.3** SELECT, INSERT, DELETE, UPDATE; CREATE, ALTER, DROP; permissions; direct, programmatic, utility, query/report access; export/import, database dump, backup

## Domain 6.0 — Security (20%)

- [ ] **6.1** Confidentiality: snooping, eavesdropping, wiretapping, social engineering, dumpster diving; integrity: man-in-the-middle, replay, impersonation, alteration; availability: DoS, power/hardware/service outage, destruction
- [ ] **6.2** Antivirus/anti-malware, host firewall, default/enabled passwords, safe browsing, patches; legitimate/OEM sources; unwanted, unnecessary, and malicious software removal
- [ ] **6.3** Privacy expectations across Internet/social/email/sharing/messaging/mobile/desktop/business/corporate networks; policies/procedures; passwords, personal, customer, and company-confidential information
- [ ] **6.4** Single/multifactor authentication and every listed factor; SSO; permissions, least privilege, roles/account types, rules, MAC, DAC; logs/tracking/history; video, biometrics, signature, receipt
- [ ] **6.5** Password length, complexity, history, expiration, cross-site reuse, managers, and reset process
- [ ] **6.6** Plain/cipher text; file/disk/mobile data at rest; email/HTTPS/VPN/mobile-app data in transit
- [ ] **6.7** Replication and data/network/power redundancy; file/critical/database/OS backups; local/cloud and on-/off-site location; contingency; restoration, prioritization, and restored access

---

## Final readiness check

You are ready for a final practice run when you can:

- explain each checked item without memorized wording;
- recognize the concept in an everyday situation;
- name a likely failure and the first safe check;
- compare the main trade-off with a nearby alternative;
- validate a configuration or fix without overstating what the test proves;
- finish mixed questions accurately within the exam's 60-minute limit.

## Source and maintenance notes

- Primary blueprint: [CompTIA IT Fundamentals (ITF+) FC0-U61 Exam Objectives, Version 4.0][official-objectives].
- Supplemental background supplied for the project was used only as a teaching reference. Its promotional copy and practice questions were not reproduced.
- Standards and product behavior can change. For current certification preparation, use the objective document for the exam you actually plan to take.
- Corrections and educational updates for this edition are maintained through [IT Education Nepal](https://iteducationnepal.org).

[official-objectives]: https://comptiacdn.azureedge.net/webcontent/docs/default-source/exam-objectives/comptia-it-fundamentals-%28itf-%29-fc0-u61-exam-objectives-%284-0%29-%281%29.pdf?sfvrsn=6dbd47a_2

---

*End of guide.*
